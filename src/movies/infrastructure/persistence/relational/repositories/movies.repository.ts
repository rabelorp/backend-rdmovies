import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MoviesEntity } from '../entities/movies.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Movies } from '../../../../domain/movies';
import { MoviesRepository } from '../../movies.abstract';
import { MoviesMapper } from '../mappers/movies.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class MoviesRelationalRepository implements MoviesRepository {
  constructor(
    @InjectRepository(MoviesEntity)
    private readonly moviesRepository: Repository<MoviesEntity>,
  ) {}

  async create(data: Movies): Promise<Movies> {
    const persistenceModel = MoviesMapper.toPersistence(data);
    const newEntity = await this.moviesRepository.save(
      this.moviesRepository.create(persistenceModel),
    );
    return MoviesMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Movies[]> {
    const entities = await this.moviesRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((user) => MoviesMapper.toDomain(user));
  }

  async findById(id: Movies['id']): Promise<NullableType<Movies>> {
    const entity = await this.moviesRepository.findOne({
      where: { id },
    });

    return entity ? MoviesMapper.toDomain(entity) : null;
  }

  async update(id: Movies['id'], payload: Partial<Movies>): Promise<Movies> {
    const entity = await this.moviesRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.moviesRepository.save(
      this.moviesRepository.create(
        MoviesMapper.toPersistence({
          ...MoviesMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return MoviesMapper.toDomain(updatedEntity);
  }

  async remove(id: Movies['id']): Promise<void> {
    await this.moviesRepository.delete(id);
  }
}
