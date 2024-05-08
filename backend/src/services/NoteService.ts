import Note from '../models/Note';
import NoteRepository from '../repositories/NoteRepository';

class NoteService {
  public async createNote(note: number): Promise<any> {
    return await NoteRepository.createNote(note);
  }

  public async getNoteById(noteId: string): Promise<any> {
    return await NoteRepository.getNoteById(noteId);
  }

  public async updateNote(noteId: string, updatedData: any): Promise<any> {
    return await NoteRepository.updateNote(noteId, updatedData);
  }

  public async deleteNote(noteId: string): Promise<void> {
    await NoteRepository.deleteNote(noteId);
  }
}

export default new NoteService();
