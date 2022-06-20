import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Role from './Role';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
    nullable: false,
  })
  name: string;

  @Column({
    length: 100,
    nullable: false,
  })
  last_name: string;

  @Column({
    length: 100,
    nullable: false,
  })
  birthday_date: string;

  @Column({
    length: 100,
    nullable: false,
  })
  gender_identity: string;

  @Column({
    length: 100,
    nullable: false,
  })
  sexual_orientation: string;

  @Column({
    length: 100,
    nullable: false,
  })
  race: string;

  @Column({
    length: 100,
    nullable: false,
  })
  email: string;

  @Column({
    length: 250,
    nullable: false,
  })
  password: string;

  // Chave estrangeira
  @ManyToOne(() => Role, {})
  @JoinColumn({
    name: 'role_id',
  })
  role: Role;

  @Column({
    type: 'uuid',
  })
  role_id: string;
}
