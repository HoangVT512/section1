import { Injectable, NotFoundException } from "@nestjs/common";
import { Course } from "./course.entity";
import { Repository, UpdateResult, DeleteResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(Course)
        private courseRepository: Repository<Course>,
    ) {}

    async findAll(): Promise<Course[]> {
        return this.courseRepository.find();
    }

    async findById(id: number): Promise<Course> {
        const course = await this.courseRepository.findOne({ where: { id } });
        if (!course) {
            throw new NotFoundException('Course not found');
        }
        return course;
    }

    create(course: Course): Promise<Course> {
        return this.courseRepository.save(course);
    }

    update(id: number, course: Course): Promise<UpdateResult> {
        return this.courseRepository.update(id, course);
    }

    delete(id: number): Promise<DeleteResult> {
        return this.courseRepository.delete(id);
    }
}
    
