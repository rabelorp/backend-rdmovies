import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Ratings } from '../../domain/ratings';

export abstract class RatingsRepository {
  abstract create(
    data: Omit<Ratings, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ): Promise<Ratings>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Ratings[]>;

  abstract findById(id: Ratings['id']): Promise<NullableType<Ratings>>;

  abstract update(
    id: Ratings['id'],
    payload: DeepPartial<Ratings>,
  ): Promise<Ratings | null>;

  abstract remove(id: Ratings['id']): Promise<void>;
}
