import { Movies } from '../../../../domain/movies';
import { MoviesEntity } from '../entities/movies.entity';

export class MoviesMapper {
  static toDomain(raw: MoviesEntity): Movies {
    const domainEntity = new Movies();
    domainEntity.categoryId = raw.categoryId;
    domainEntity.releaseDate = raw.releaseDate;
    domainEntity.description = raw.description;
    domainEntity.title = raw.title;
    domainEntity.directors = raw.directors;
    domainEntity.actors = raw.actors;
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Movies): MoviesEntity {
    const persistenceEntity = new MoviesEntity();
    persistenceEntity.categoryId = domainEntity.categoryId;
    persistenceEntity.releaseDate = domainEntity.releaseDate;
    persistenceEntity.description = domainEntity.description;
    persistenceEntity.title = domainEntity.title;
    persistenceEntity.directors = domainEntity.directors;
    persistenceEntity.actors = domainEntity.actors;
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
