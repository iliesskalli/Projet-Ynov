// models/Ad.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface Ad extends Document {
  title: string;
  price: number;
  city: string;
  area: number;
  type: string;
  furniture: string;
  floor: number;
  dpe: string;
  description: string;
}

const AdSchema: Schema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  city: { type: String, required: true },
  area: { type: Number, required: true },
  type: { type: String, required: true }, // Nouveau champ
  furniture: { type: String }, // Nouveau champ
  floor: { type: Number }, // Nouveau champ
  dpe: { type: String }, // Nouveau champ
  description: { type: String } // Nouveau champ
});

export default mongoose.model<Ad>('Ad', AdSchema);
