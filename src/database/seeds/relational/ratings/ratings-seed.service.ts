import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RatingsEntity } from '../../../../ratings/infrastructure/persistence/relational/entities/ratings.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RatingsSeedService {
  constructor(
    @InjectRepository(RatingsEntity)
    private repository: Repository<RatingsEntity>,
  ) {}

  async run() {
    const count = await this.repository.count();

    if (count === 0) {
      await this.repository.save(this.repository.create({}));
    }
  }
}
