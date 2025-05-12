import { Enrollment } from '../enrollment/enrollment.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Enrollment, enrollment => enrollment.student)
  enrollments: Enrollment[];  
}
