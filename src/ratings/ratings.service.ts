import { Injectable } from '@nestjs/common';
import { CreateRatingsDto } from './dto/create-ratings.dto';
import { UpdateRatingsDto } from './dto/update-ratings.dto';
import { RatingsRepository } from './infrastructure/persistence/ratings.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Ratings } from './domain/ratings';

@Injectable()
export class RatingsService {
  constructor(private readonly ratingsRepository: RatingsRepository) {}

  create(createRatingsDto: CreateRatingsDto) {
    return this.ratingsRepository.create(createRatingsDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.ratingsRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: Ratings['id']) {
    return this.ratingsRepository.findById(id);
  }

  update(id: Ratings['id'], updateRatingsDto: UpdateRatingsDto) {
    return this.ratingsRepository.update(id, updateRatingsDto);
  }

  remove(id: Ratings['id']) {
    return this.ratingsRepository.remove(id);
  }
}
