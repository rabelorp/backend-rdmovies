import { Injectable } from '@nestjs/common';
import { CreateMoviesDto } from './dto/create-movies.dto';
import { UpdateMoviesDto } from './dto/update-movies.dto';
import { MoviesRepository } from './infrastructure/persistence/movies.abstract';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Movies } from './domain/movies';

@Injectable()
export class MoviesService {
  constructor(private readonly moviesRepository: MoviesRepository) {}

  create(createMoviesDto: CreateMoviesDto) {
    return this.moviesRepository.create(createMoviesDto);
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.moviesRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findOne(id: Movies['id']) {
    return this.moviesRepository.findById(id);
  }

  update(id: Movies['id'], updateMoviesDto: UpdateMoviesDto) {
    return this.moviesRepository.update(id, updateMoviesDto);
  }

  remove(id: Movies['id']) {
    return this.moviesRepository.remove(id);
  }
}
