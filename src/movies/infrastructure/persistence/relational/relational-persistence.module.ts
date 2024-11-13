import { Module } from '@nestjs/common';
import { MoviesRepository } from '../movies.abstract';
import { MoviesRelationalRepository } from './repositories/movies.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesEntity } from './entities/movies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MoviesEntity])],
  providers: [
    {
      provide: MoviesRepository,
      useClass: MoviesRelationalRepository,
    },
  ],
  exports: [MoviesRepository],
})
export class RelationalMoviesPersistenceModule {}
