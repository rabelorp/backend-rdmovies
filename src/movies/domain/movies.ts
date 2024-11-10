import { ApiProperty } from '@nestjs/swagger';

export class Movies {
  @ApiProperty()
  ratingId: string;

  @ApiProperty()
  categoryId: string;

  @ApiProperty()
  releaseDate: Date;

  @ApiProperty()
  description: string;

  @ApiProperty()
  title: string;

  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
