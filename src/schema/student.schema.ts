import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  email: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
