import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Banner {
  @PrimaryGeneratedColumn({
    type: 'int',
    comment: 'id',
  })
  id: number;

  @Column({
    type: 'varchar',
    default: '',
  })
  name: string;

  @Column({
    type: 'varchar',
    default: '',
  })
  url: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date;
}
