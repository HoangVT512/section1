import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student/student.entity';
import { Course } from './course/course.entity';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { Enrollment } from './enrollment/enrollment.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteModule } from './note/note.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5435,
      username: 'postgres',
      password: 'dobiet',
      database: 'postgres',
      entities: [Student, Course, Enrollment],
      synchronize: true,
    }),
    StudentModule,
    CourseModule,
    EnrollmentModule,
    NoteModule,
    MongooseModule.forRoot('mongodb://hoangvt:dobiet@localhost:27019'), 

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
