import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Score {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  playerName: string;

  @Column()
  score: number;

  constructor(id: number, playerName: string, score: number) {
    this.id = id;
    this.playerName = playerName;
    this.score = score;
  }
}
