import {
  Column,
  Entity,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Role from './Role';
import Course from './Course';

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

  @ManyToMany(() => Course, (course) => course.users, { cascade: true })
  courses: Course[];
}
