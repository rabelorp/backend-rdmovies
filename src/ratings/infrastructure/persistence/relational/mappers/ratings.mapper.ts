import { Ratings } from '../../../../domain/ratings';
import { RatingsEntity } from '../entities/ratings.entity';

export class RatingsMapper {
  static toDomain(raw: RatingsEntity): Ratings {
    const domainEntity = new Ratings();
    domainEntity.rating = raw.rating;
    domainEntity.movieId = raw.movieId;
    domainEntity.userId = raw.userId;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Ratings): RatingsEntity {
    const persistenceEntity = new RatingsEntity();
    persistenceEntity.rating = domainEntity.rating;

    persistenceEntity.movieId = domainEntity.movieId;
    persistenceEntity.userId = domainEntity.userId;

    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
