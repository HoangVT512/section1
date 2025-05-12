import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { Note, NoteSchema } from '../schema/note.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from '../schema/student.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
        MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    ],
    controllers: [NoteController],
    providers: [NoteService],
})
export class NoteModule {}
