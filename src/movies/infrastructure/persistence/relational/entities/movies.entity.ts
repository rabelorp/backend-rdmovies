import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Index,
  OneToOne,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { ApiProperty } from '@nestjs/swagger';
import { CategoryEntity } from 'src/categories/infrastructure/persistence/relational/entities/category.entity';
import { RatingsEntity } from 'src/ratings/infrastructure/persistence/relational/entities/ratings.entity';
import { FileEntity } from 'src/files/infrastructure/persistence/relational/entities/file.entity';

@Entity({
  name: 'movies',
})
export class MoviesEntity extends EntityRelationalHelper {
  @OneToOne(() => RatingsEntity, (rating) => rating.movie, { eager: true })
  ratings: RatingsEntity;

  @ManyToOne(() => CategoryEntity, { eager: true, nullable: true })
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

  @ApiProperty({
    type: () => FileEntity,
  })
  @OneToOne(() => FileEntity, {
    eager: true,
  })
  @JoinColumn({ name: 'photoId' })
  photo: FileEntity;

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
