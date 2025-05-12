import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Note {
  @Prop()
  studentId: number;

  @Prop()
  content: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const NoteSchema = SchemaFactory.createForClass(Note);