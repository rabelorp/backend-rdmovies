import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoviesEntity } from '../../../../movies/infrastructure/persistence/relational/entities/movies.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesSeedService {
  constructor(
    @InjectRepository(MoviesEntity)
    private readonly repository: Repository<MoviesEntity>,
  ) {}

  async run() {
    const count = await this.repository.count();

    if (count === 0) {
      await this.repository.save(this.repository.create({}));
    }
  }
}
