import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Student } from '../student/student.entity';
import { Course } from '../course/course.entity';

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, student => student.enrollments)
  student: Student;

  @ManyToOne(() => Course, course => course.enrollments)
  course: Course;

  @Column()
  enrollDate: Date;
}
