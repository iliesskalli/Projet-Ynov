import mongoose, { Schema, Document } from 'mongoose';

export interface Note extends Document {
  note: String;
}

const NoteSchema: Schema = new Schema({
  note: { type: String, required: true },
});

export default mongoose.model<Note>('Note', NoteSchema);
