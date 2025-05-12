import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from '../schema/note.schema';
import { Student } from '../schema/student.schema';
@Injectable()
export class NoteService {
    constructor(
        @InjectModel(Note.name) private noteModel: Model<Note>,
        @InjectModel(Student.name) private studentModel: Model<Student>,
    ) {}
    
    async create(note: { studentId: number, content: string }): Promise<Note> {
        const student = await this.studentModel.findById(note.studentId).exec();
        if (!student) {
            throw new NotFoundException('Student not found');
        }
        const createdNote = new this.noteModel(note);
        return createdNote.save();
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
