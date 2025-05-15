import { Module, ValidationPipe } from '@nestjs/common';
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
import { APP_PIPE, APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { TransformInterceptor } from './transform.interceptor';
import { HttpExceptionFilter } from './http-exception.filter';
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
    MongooseModule.forRoot('mongodb://hoangvt:d0biet@localhost:27019'), 

  ],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_PIPE,
      useClass: ValidationPipe,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: TransformInterceptor,
  },
  {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },
  ],
})
export class AppModule {}
