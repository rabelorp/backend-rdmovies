import { MoviesEntity } from 'src/movies/infrastructure/persistence/relational/entities/movies.entity';
import { Ratings } from '../../../../domain/ratings';
import { RatingsEntity } from '../entities/ratings.entity';
import { UserEntity } from 'src/users/infrastructure/persistence/relational/entities/user.entity';

export class RatingsMapper {
  static toDomain(raw: RatingsEntity): Ratings {
    const domainEntity = new Ratings();
    domainEntity.rating = raw.rating;
    domainEntity.movieId = raw.movie.id;
    domainEntity.userId = raw.user.id;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Ratings): RatingsEntity {
    const persistenceEntity = new RatingsEntity();
    persistenceEntity.rating = domainEntity.rating;

    persistenceEntity.movie = { id: domainEntity.movieId } as MoviesEntity;
    persistenceEntity.user = { id: domainEntity.userId } as UserEntity;

    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
