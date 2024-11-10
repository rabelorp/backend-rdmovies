import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { RelationalMoviesPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalMoviesPersistenceModule],
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [MoviesService, RelationalMoviesPersistenceModule],
})
export class MoviesModule {}
