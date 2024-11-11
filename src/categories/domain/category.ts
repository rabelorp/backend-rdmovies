import { ApiProperty } from '@nestjs/swagger';

export class Category {
  @ApiProperty()
  description: string;

  @ApiProperty()
  name: string;

  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
