import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class base_message_info {
  @PrimaryGeneratedColumn({
    type: 'int',
    comment: 'id',
  })
  id: number;
  @Column({
    type: 'varchar',
    default: 'topic',
  })
  msg_type: string;

  @Column({
    type: 'varchar',
    default: '',
  })
  content: string;

  @Column({
    type: 'varchar',
    default: 'wx_applet',
  })
  platform: string;

  @Column({
    type: 'varchar',
    default: 'firecontrol-applet',
  })
  system_type: string;

  @Column({
    type: 'varchar',
    default: '1',
  })
  is_flag: string;

  @Column({
    type: 'varchar',
    default: '1',
  })
  state: string;

  @Column({
    type: 'varchar',
    default: '0',
  })
  community_id: string;

  @Column({
    type: 'varchar',
    default: '1',
  })
  user_id: string;

  @Column({
    type: 'varchar',
    default: '1',
  })
  create_user: string;

  @Column({
    type: 'varchar',
    default: '1',
  })
  update_user: string;

  @Column({
    type: 'varchar',
    default: null,
  })
  create_time: string;

  @Column({
    type: 'varchar',
    default: null,
  })
  update_time: string;
  // @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  // create_time: Date;
  //
  // @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  // update_time: Date;
}
