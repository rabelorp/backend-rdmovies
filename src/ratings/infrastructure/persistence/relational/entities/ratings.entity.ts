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
import { IsInt, IsUUID, Max, Min } from 'class-validator';
import { MoviesEntity } from 'src/movies/infrastructure/persistence/relational/entities/movies.entity';
import { UserEntity } from 'src/users/infrastructure/persistence/relational/entities/user.entity';

@Entity({
  name: 'ratings',
})
export class RatingsEntity extends EntityRelationalHelper {
  @ApiProperty()
  @Column({ type: 'int', nullable: false, default: 0 })
  @IsInt()
  @Min(0)
  @Max(4)
  rating: number;

  @ManyToOne(() => UserEntity, { eager: true, nullable: false })
  @JoinColumn({ name: 'userId' })
  @IsInt()
  user: UserEntity;

  @ManyToOne(() => MoviesEntity, { eager: true, nullable: false })
  @JoinColumn({ name: 'movieId' })
  @IsUUID()
  movie: MoviesEntity;

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
