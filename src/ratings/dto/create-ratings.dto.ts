import { IsString, IsNumber, IsInt, IsIn } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateRatingsDto {
  id?: string;

  @ApiProperty({ description: 'O voto deve ser um valor entre 1 e 4' })
  @IsNumber()
  @IsIn([1, 2, 3, 4], { message: 'O voto deve ser 1, 2, 3 ou 4' })
  rating: number;

  @ApiProperty()
  @IsString()
  movieId: string;

  @ApiProperty()
  @IsInt()
  userId: number;
}
