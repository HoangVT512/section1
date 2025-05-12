import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository, UpdateResult, DeleteResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { StudentService } from "src/student/student.service";
import { CourseService } from "src/course/course.service";
import { Enrollment } from "./enrollment.entity";

@Injectable()
export class EnrollmentService {
    constructor(
        @InjectRepository(Enrollment)
        private enrollmentRepository: Repository<Enrollment>,
        private studentService: StudentService,
        private courseService: CourseService,
    ) {}
 
    async findAll(): Promise<Enrollment[]> {
        return this.enrollmentRepository.find();
    }

    async create(studentId: number, courseId: number): Promise<Enrollment> {
        const student = await this.studentService.findById(studentId);
        const course = await this.courseService.findById(courseId);
        return this.enrollmentRepository.save({
            student,
            course,
            enrollDate: new Date(),
        });
    }


}
