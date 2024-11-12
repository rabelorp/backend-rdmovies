import { ApiProperty } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';
import { FileType } from 'src/files/domain/file';
import { CreateRatingsDto } from 'src/ratings/dto/create-ratings.dto';

export class Movies {
  @ApiProperty()
  categoryId: string;

  @ApiProperty()
  releaseDate: Date;

  @ApiProperty()
  description: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  photoId: string;

  @ApiProperty({
    type: () => FileType,
  })
  photo: FileType;

  @ApiProperty()
  directors?: string[];

  @ApiProperty()
  actors?: string[];

  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  category?: CreateCategoryDto;

  ratings?: CreateRatingsDto;
}
