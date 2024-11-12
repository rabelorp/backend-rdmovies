import { IsArray, IsString, IsUUID } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';
import { CreateRatingsDto } from 'src/ratings/dto/create-ratings.dto';
import { FileDto } from 'src/files/dto/file.dto';

export class CreateMoviesDto {
  @ApiProperty()
  @IsString()
  categoryId: string;

  @ApiProperty()
  @IsString()
  releaseDate: Date;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsUUID()
  photoId: string;

  @ApiProperty({ type: () => FileDto })
  photo: FileDto;

  @ApiProperty({
    type: [String],
    description:
      'Lista de diretores, ex: ["Steven Spielberg", "James Cameron"]',
  })
  @IsArray()
  @IsString({ each: true })
  directors?: string[];

  @ApiProperty({
    type: [String],
    description:
      'Lista de atores, ex: ["Leonardo DiCaprio", "Scarlett Johansson "]',
  })
  @IsArray()
  @IsString({ each: true })
  actors?: string[];

  category?: CreateCategoryDto;

  ratings?: CreateRatingsDto;
}
