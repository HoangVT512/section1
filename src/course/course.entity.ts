import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Enrollment } from '../enrollment/enrollment.entity';
import { MinLength } from 'class-validator';
import { IsString } from 'class-validator';
@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @MinLength(2)
  name: string;

  @OneToMany(() => Enrollment, enrollment => enrollment.course)
  enrollments: Enrollment[];
}
