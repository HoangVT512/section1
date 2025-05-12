import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EnrollmentService } from "./enrollment.service";
import { EnrollmentController } from "./enrollment.controller";
import { CourseModule } from "src/course/course.module";
import { StudentModule } from "src/student/student.module";
import { Enrollment } from "./enrollment.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Enrollment]), StudentModule, CourseModule],
    controllers: [EnrollmentController],
    providers: [EnrollmentService],
})
export class EnrollmentModule {}

