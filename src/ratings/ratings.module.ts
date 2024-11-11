import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';
import { RelationalRatingsPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalRatingsPersistenceModule],
  controllers: [RatingsController],
  providers: [RatingsService],
  exports: [RatingsService, RelationalRatingsPersistenceModule],
})
export class RatingsModule {}
