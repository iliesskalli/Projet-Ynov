import Note from '../models/Note';

class NoteRepository {
  public async createNote(note: number): Promise<any> {
    const newNote = new Note({ note });
    await newNote.save();
    return newNote;
  }

  public async getNoteById(noteId: string): Promise<any> {
    return await Note.findById(noteId);
  }

  public async updateNote(noteId: string, updatedData: any): Promise<any> {
    return await Note.findByIdAndUpdate(noteId, updatedData, { new: true });
  }

  public async deleteNote(noteId: string): Promise<void> {
    await Note.findByIdAndDelete(noteId);
  }
}

export default new NoteRepository();
