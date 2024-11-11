import { ApiProperty } from '@nestjs/swagger';

export class Ratings {
  @ApiProperty()
  rating: number;

  @ApiProperty()
  movieId: string;

  @ApiProperty()
  userId: number;

  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
