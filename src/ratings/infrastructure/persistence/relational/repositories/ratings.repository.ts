import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RatingsEntity } from '../entities/ratings.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Ratings } from '../../../../domain/ratings';
import { RatingsRepository } from '../../ratings.abstract';
import { RatingsMapper } from '../mappers/ratings.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class RatingsRelationalRepository implements RatingsRepository {
  constructor(
    @InjectRepository(RatingsEntity)
    private readonly ratingsRepository: Repository<RatingsEntity>,
  ) {}

  async create(data: Ratings): Promise<Ratings> {
    const persistenceModel = RatingsMapper.toPersistence(data);
    const newEntity = await this.ratingsRepository.save(
      this.ratingsRepository.create(persistenceModel),
    );
    return RatingsMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Ratings[]> {
    const entities = await this.ratingsRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((user) => RatingsMapper.toDomain(user));
  }

  async findById(
    id: Ratings['id'],
    userId: Ratings['userId'],
  ): Promise<NullableType<Ratings>> {
    const entity = await this.ratingsRepository.findOne({
      where: { movieId: id, userId: userId },
    });

    return entity ? RatingsMapper.toDomain(entity) : null;
  }

  async update(id: Ratings['id'], payload: Partial<Ratings>): Promise<Ratings> {
    const entity = await this.ratingsRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.ratingsRepository.save(
      this.ratingsRepository.create(
        RatingsMapper.toPersistence({
          ...RatingsMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return RatingsMapper.toDomain(updatedEntity);
  }

  async remove(id: Ratings['id']): Promise<void> {
    await this.ratingsRepository.delete(id);
  }
}
