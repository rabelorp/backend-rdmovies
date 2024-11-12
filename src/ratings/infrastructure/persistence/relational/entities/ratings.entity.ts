import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsUUID } from 'class-validator';
import { MoviesEntity } from 'src/movies/infrastructure/persistence/relational/entities/movies.entity';

@Entity({
  name: 'ratings',
})
export class RatingsEntity extends EntityRelationalHelper {
  @ApiProperty()
  @Column({ type: 'int', nullable: false, default: 0 })
  @IsInt()
  rating: number;

  @ManyToOne(() => MoviesEntity, (movie) => movie.ratings, { nullable: false })
  @JoinColumn({ name: 'movieId' })
  movie: MoviesEntity;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  @IsInt()
  userId: number;

  @ApiProperty()
  @Column({ type: 'uuid', nullable: false })
  @IsUUID()
  movieId: string;

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
