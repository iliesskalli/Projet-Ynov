// Message.ts
import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
  senderEmail: { type: String, required: true },
  receiverEmail: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default model('Message', messageSchema);
