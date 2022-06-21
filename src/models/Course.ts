import {
    Column,
    Entity,
    ManyToMany,
    JoinTable,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  import User from './User';
  
  @Entity('courses')
  export default class Course {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({
      length: 100,
      nullable: false,
    })
    course_name: string;
  
    @Column({
      length: 100,
      nullable: false,
    })
    price: number;
  
    @Column({
      length: 100,
      nullable: false,
    })
    duration: string;
  
    @Column({
      length: 100,
      nullable: false,
    })
    teacher_name: string;
  
    @Column({
      length: 256,
      nullable: false,
    })
    description: string;
  
    @Column({
      length: 100,
      nullable: false,
    })
    photo: string;
  
    @ManyToMany(() => User)
    @JoinTable()
    users: User[];
  }  