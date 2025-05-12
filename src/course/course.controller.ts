import { Controller, Get, Param, Post, Put, Delete, Body } from "@nestjs/common";
import { Course } from "./course.entity";
import { CourseService } from "./course.service";
import { UpdateResult, DeleteResult } from "typeorm";

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Course> {
    return this.courseService.findById(id);
  }

  @Post()
  create(@Body() course: Course): Promise<Course> {
    return this.courseService.create(course);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() course: Course): Promise<UpdateResult> {
    return this.courseService.update(id, course);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.courseService.delete(id);
  }
}
