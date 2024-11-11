import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingsEntity } from '../../../../ratings/infrastructure/persistence/relational/entities/ratings.entity';
import { RatingsSeedService } from './ratings-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([RatingsEntity])],
  providers: [RatingsSeedService],
  exports: [RatingsSeedService],
})
export class RatingsSeedModule {}
