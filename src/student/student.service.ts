import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async findById(id: number): Promise<Student> {
    const student = await this.studentRepository.findOne({ where: { id } });
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    return student;
  }

  create(student: Student): Promise<Student> {
    return this.studentRepository.save(student);
  }

  update(id: number, student: Student): Promise<UpdateResult> {
    return this.studentRepository.update(id, student);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.studentRepository.delete(id);
  }
}

