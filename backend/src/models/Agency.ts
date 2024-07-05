import mongoose, { Schema, Document } from 'mongoose';

export interface Agency extends Document {
  nom: string;
  numeroTel: string;
  mail: string;
}

const AgencySchema: Schema = new Schema({
  nom: { type: String, required: true },
  numeroTel: { type: String, required: true },
  mail: { type: String, required: true },
});

export default mongoose.model<Agency>('Agency', AgencySchema);
