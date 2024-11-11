import { IsString, IsNumber, IsInt } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateRatingsDto {
  @ApiProperty()
  @IsNumber()
  rating: number;

  @ApiProperty()
  @IsString()
  movieId: string;

  @ApiProperty()
  @IsInt()
  userId: number;
}
