import { Module } from '@nestjs/common';
import { RatingsRepository } from '../ratings.repository';
import { RatingsRelationalRepository } from './repositories/ratings.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingsEntity } from './entities/ratings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RatingsEntity])],
  providers: [
    {
      provide: RatingsRepository,
      useClass: RatingsRelationalRepository,
    },
  ],
  exports: [RatingsRepository],
})
export class RelationalRatingsPersistenceModule {}
