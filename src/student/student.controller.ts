import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { StudentService } from "./student.service";
import { Student } from "./student.entity";
import { DeleteResult, UpdateResult } from "typeorm";

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }
  @Get(':id')
  findById(@Param('id') id: number): Promise<Student> {
    return this.studentService.findById(id);
  }

  @Post()
  create(@Body() student: Student): Promise<Student> {
    return this.studentService.create(student);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() student: Student): Promise<UpdateResult> {
    return this.studentService.update(id, student);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.studentService.delete(id);
  }
}

