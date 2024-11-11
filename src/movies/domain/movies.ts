import { ApiProperty } from '@nestjs/swagger';

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
}
