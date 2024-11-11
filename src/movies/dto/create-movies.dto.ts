import { IsArray, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

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
}
