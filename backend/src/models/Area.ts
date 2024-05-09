import mongoose, { Schema, Document } from 'mongoose';

export interface Area extends Document {
  longitude: number;
  latitude: number;
  name: string;
   
}

const AreaSchema: Schema = new Schema({
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  name: { type: String, required: true },
  
});

export default mongoose.model<Area>('Area', AreaSchema);
