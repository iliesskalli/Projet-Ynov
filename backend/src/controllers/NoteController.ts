import { Request, Response } from 'express';
import NoteService from '../services/NoteService';

class NoteController {
  public async createNote(req: Request, res: Response): Promise<void> {
    try {
      const { note } = req.body;
      const newNote = await NoteService.createNote(note);
      res.status(201).json(newNote);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async updateNote(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { note } = req.body;
      const updatedNote = await NoteService.updateNote(id, { note });
      if (!updatedNote) {
        res.status(404).json({ message: 'Note not found' });
      } else {
        res.status(200).json(updatedNote);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async deleteNote(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await NoteService.deleteNote(id);
      res.status(204).end();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getNoteById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const note = await NoteService.getNoteById(id);
      if (!note) {
        res.status(404).json({ message: 'Note not found' });
      } else {
        res.status(200).json(note);
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

}

export default new NoteController();
