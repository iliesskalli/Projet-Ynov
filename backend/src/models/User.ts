import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  adresse: { type: String, required: true },
  numeroTel: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = model('User', userSchema);

export default User;
