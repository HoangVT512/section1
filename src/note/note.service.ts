import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Note } from '../schema/note.schema';
import { Student } from '../schema/student.schema';

@Injectable()
export class NoteService {
    constructor(
        @InjectModel(Note.name) private noteModel: Model<Note>,
        @InjectModel(Student.name) private studentModel: Model<Student>,
    ) {}

    // async addStudent(): Promise<Student> {
    //     return this.studentModel.create({
    //         name: 'John Doe',
    //         email: 'john.doe@example.com'
    //     })}

    // async findAllStudents(): Promise<Student[]> {
    //     return this.studentModel.find().exec();
    // }
    
    
    async create(note: { studentId: string, content: string }): Promise<Note> {
        try {
            const studentId = new Types.ObjectId(note.studentId);
            const student = await this.studentModel.findById(studentId).exec();
            if (!student) {
                throw new NotFoundException('Student not found');
            }
            const createdNote = new this.noteModel({
                ...note,
                studentId
            });
            return createdNote.save();
        } catch (error) {
            if (error instanceof Error && error.name === 'CastError') {
                throw new NotFoundException('Invalid student ID format');
            }
            throw error;
        }
    }

    async findAll(): Promise<Note[]> {
        return this.noteModel.find().exec();
    }

    async findById(id: string): Promise<Note> {
        const note = await this.noteModel.findById(id).exec();
        if (!note) {
            throw new NotFoundException('Note not found');
        }
        return note;
    }

    async delete(id: string): Promise<Note> {
        const deletedNote = await this.noteModel.findByIdAndDelete(id).exec();
        if (!deletedNote) {
            throw new NotFoundException('Note not found');
        }
        return deletedNote;
    }
}   
