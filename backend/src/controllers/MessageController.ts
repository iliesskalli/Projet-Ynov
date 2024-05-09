import { Request, Response } from 'express';
import MessageService from '../services/MessageService';

class MessageController {
  public async sendMessage(req: Request, res: Response): Promise<void> {
    try {
      const { senderEmail, receiverEmail, content } = req.body;
      const newMessage = await MessageService.sendMessage(senderEmail, receiverEmail, content);
      res.status(201).json(newMessage);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getMessageByEmail(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.params;
      const messages = await MessageService.getMessagesByEmail(email);
      res.status(200).json(messages);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new MessageController();
