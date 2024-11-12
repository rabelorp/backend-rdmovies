import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';
import { Movies } from '../../../../domain/movies';
import { MoviesEntity } from '../entities/movies.entity';
import { CreateRatingsDto } from 'src/ratings/dto/create-ratings.dto';
import { CategoryEntity } from 'src/categories/infrastructure/persistence/relational/entities/category.entity';
import { FileDto } from 'src/files/dto/file.dto';
import { FileEntity } from 'src/files/infrastructure/persistence/relational/entities/file.entity';

export class MoviesMapper {
  static toDomain(raw: MoviesEntity): Movies {
    const domainEntity = new Movies();

    domainEntity.category = new CreateCategoryDto();
    domainEntity.category.id = raw.category?.id;
    domainEntity.category.name = raw.category?.name;

    if (raw.ratings) {
      domainEntity.ratings = new CreateRatingsDto();
      domainEntity.ratings.rating = raw.ratings.rating;
    }

    domainEntity.releaseDate = raw.releaseDate;

    if (raw.photo) {
      domainEntity.photo = new FileDto();
      domainEntity.photo.id = raw.photo.id;
      domainEntity.photo.path = `${process.env.BACKEND_DOMAIN}${raw.photo?.path}`;
    }

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

    persistenceEntity.category = {
      id: domainEntity.categoryId,
    } as CategoryEntity;

    persistenceEntity.releaseDate = domainEntity.releaseDate;
    persistenceEntity.description = domainEntity.description;
    persistenceEntity.title = domainEntity.title;
    persistenceEntity.directors = domainEntity.directors;
    persistenceEntity.actors = domainEntity.actors;

    if (domainEntity.photoId) {
      persistenceEntity.photo = {
        id: domainEntity.photoId,
      } as unknown as FileEntity;
    }

    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
