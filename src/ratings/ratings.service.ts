import {
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateRatingsDto } from './dto/create-ratings.dto';
import { UpdateRatingsDto } from './dto/update-ratings.dto';
import { RatingsRepository } from './infrastructure/persistence/ratings.abstract';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Ratings } from './domain/ratings';

@Injectable()
export class RatingsService {
  constructor(private readonly ratingsRepository: RatingsRepository) {}

  async create(createRatingsDto: CreateRatingsDto) {
    const ratings = await this.ratingsRepository.findById(
      createRatingsDto.movieId,
      createRatingsDto.userId,
    );
    if (
      ratings?.userId === createRatingsDto.userId &&
      ratings?.movieId === createRatingsDto.movieId
    ) {
      throw new UnprocessableEntityException({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        errors: {
          reservation: 'voteAlreadyExists',
        },
      });
    } else {
      return this.ratingsRepository.create(createRatingsDto);
    }
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
