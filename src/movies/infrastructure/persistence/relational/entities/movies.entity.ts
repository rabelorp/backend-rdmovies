import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { ApiProperty } from '@nestjs/swagger';
import { CategoryEntity } from 'src/categories/infrastructure/persistence/relational/entities/category.entity';
import { RatingsEntity } from 'src/ratings/infrastructure/persistence/relational/entities/ratings.entity';

@Entity({
  name: 'movies',
})
export class MoviesEntity extends EntityRelationalHelper {
  // @ApiProperty()
  // @Column({ type: 'bigint', nullable: true })
  // ratingCount: string;

  @ApiProperty()
  @Column({ type: 'uuid', nullable: false })
  categoryId: string;

  @ManyToOne(() => RatingsEntity, { nullable: true })
  @JoinColumn({ name: 'ratingId' })
  @Index()
  rating: RatingsEntity;

  @ManyToOne(() => CategoryEntity, { nullable: true })
  @JoinColumn({ name: 'categoryId' })
  @Index()
  category: CategoryEntity;

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
  @Column('jsonb', { nullable: true })
  directors?: string[];

  @ApiProperty()
  @Column('jsonb', { nullable: true })
  actors?: string[];

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
