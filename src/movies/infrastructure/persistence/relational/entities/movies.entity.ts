import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'movies',
})
export class MoviesEntity extends EntityRelationalHelper {
  @ApiProperty()
  @Column({ type: 'uuid', nullable: false })
  ratingId: string;

  @ApiProperty()
  @Column({ type: 'uuid', nullable: false })
  categoryId: string;

  @ApiProperty()
  @Column({ type: 'date', nullable: false })
  releaseDate: Date;

  @ApiProperty()
  @Column({ type: 'text', nullable: false })
  description: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: false })
  title: string;

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
