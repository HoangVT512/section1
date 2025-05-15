import { Enrollment } from '../enrollment/enrollment.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsString, IsEmail, MinLength } from 'class-validator';  

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @MinLength(2)
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @OneToMany(() => Enrollment, enrollment => enrollment.student)
  enrollments: Enrollment[];  
}
