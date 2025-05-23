import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from '../schema/note.schema';
import { Student } from 'src/schema/student.schema';

@Controller('notes')
export class NoteController {
    constructor(private readonly noteService: NoteService) {}

    @Post()
    create(@Body() note: { studentId: string, content: string }): Promise<Note> {
        return this.noteService.create(note);
    }

    @Get()
    findAll(): Promise<Note[]> {
        return this.noteService.findAll();
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<Note> {
        return this.noteService.delete(id);
    }
    // @Post('add-student')
    // addStudent(): Promise<Student> {
    //     return this.noteService.addStudent();
    // }

    // @Get('students')
    // findAllStudents(): Promise<Student[]> {
    //     return this.noteService.findAllStudents();
    // }
}
