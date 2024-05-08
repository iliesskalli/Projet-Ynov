import mongoose, { Schema, Document } from 'mongoose';

export interface Ad extends Document {
  titre: string;
  prix: string;
  ville: string;
  superficie: string;
  type: string;
  meuble: string;
  etage: string;
  dpe: string;
  description: string;
}

const AdSchema: Schema = new Schema({
  titre: { type: String, required: true },
  prix: { type: String, required: true },
  ville: { type: String, required: true },
  superficie: { type: String, required: true },
  type: { type: String, required: true },  
  meuble: { type: String },  
  etage: { type: String },  
  dpe: { type: String },  
  description: { type: String }  
});

export default mongoose.model<Ad>('Ad', AdSchema);


