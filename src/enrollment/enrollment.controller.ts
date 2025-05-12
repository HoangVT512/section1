import { Controller, Get, Post, Body } from "@nestjs/common";
import { EnrollmentService } from "./enrollment.service";
import { Enrollment } from "./enrollment.entity";

@Controller('enrollments')
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


