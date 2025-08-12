import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TrackEntity } from '../track/track.entity';

@Entity()
export class PlaylistEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name?: string;

  @Column()
  spotifyUrl: string;

  @Column({ nullable: true })
  error?: string;

  @Column({ default: false })
  active?: boolean;

  @Column({ default: () => Date.now() })
  createdAt?: number;

  @Column({ nullable: true })
  coverUrl?: string;

  @OneToMany(() => TrackEntity, (track) => track.playlist)
  tracks?: TrackEntity[];
}
