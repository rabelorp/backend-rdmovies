import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Movies } from '../../domain/movies';

export abstract class MoviesRepository {
  abstract create(
    data: Omit<Movies, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ): Promise<Movies>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Movies[]>;

  abstract findById(id: Movies['id']): Promise<NullableType<Movies>>;

  abstract update(
    id: Movies['id'],
    payload: DeepPartial<Movies>,
  ): Promise<Movies | null>;

  abstract remove(id: Movies['id']): Promise<void>;
}
