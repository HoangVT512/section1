import { Controller, Get, Post, Body, UseInterceptors } from "@nestjs/common";
import { EnrollmentService } from "./enrollment.service";
import { Enrollment } from "./enrollment.entity";
import { LoggingInterceptor } from "src/logging.interceptor";

@Controller('enrollments')
@UseInterceptors(LoggingInterceptor)
export class EnrollmentController {
    constructor(private readonly enrollmentService: EnrollmentService) {}
    @Get()
    findAll(): Promise<Enrollment[]> {
        return this.enrollmentService.findAll();
    }

    @Post()
    create(@Body() app: { studentId: number, courseId: number }): Promise<Enrollment> {   
        return this.enrollmentService.create(app.studentId, app.courseId);
    }
}


