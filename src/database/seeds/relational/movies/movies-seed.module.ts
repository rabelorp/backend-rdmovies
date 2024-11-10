import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesEntity } from '../../../../movies/infrastructure/persistence/relational/entities/movies.entity';
import { MoviesSeedService } from './movies-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([MoviesEntity])],
  providers: [MoviesSeedService],
  exports: [MoviesSeedService],
})
export class MoviesSeedModule {}
