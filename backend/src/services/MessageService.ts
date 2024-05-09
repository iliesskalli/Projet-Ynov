import Message from '../models/Message';

class MessageService {
  public async sendMessage(senderEmail: string, receiverEmail: string, content: string): Promise<any> {
    const newMessage = new Message({ senderEmail, receiverEmail, content });
    await newMessage.save();
    return newMessage;
  }

  public async getMessagesByEmail(email: string): Promise<any> {
    return await Message.find({ $or: [{ senderEmail: email }, { receiverEmail: email }] });
  }
}

export default new MessageService();
