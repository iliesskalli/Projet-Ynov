import express from 'express';
import mongoose from 'mongoose';
import UserController from './controllers/UserController';
import AdController from './controllers/AdController';
import AreaController from './controllers/AreaController';
import NoteController from './controllers/NoteController';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes pour les utilisateurs
app.post('/register', UserController.register);
app.post('/login', UserController.login);
app.post('/logout', UserController.logout);
app.get('/user/:id', UserController.getUserById);
app.put('/user/:id', UserController.updateUserById);
app.delete('/user/:id', UserController.deleteUserById);

// Routes pour les annonces
app.post('/ad', AdController.createAd);
app.put('/ad/:id', AdController.updateAd);
app.delete('/ad/:id', AdController.deleteAd);
app.get('/ad', AdController.getAllAd);
app.get('/ad/:id', AdController.getAdById);


// Routes pour les zones
app.post('/area', AreaController.createArea);
app.get('/areas', AreaController.getAllAreas);
app.get('/area/:id', AreaController.getAreaById);
app.put('/area/:id', AreaController.updateArea);
app.delete('/area/:id', AreaController.deleteArea);

// Routes pour les notes
app.post('/note', NoteController.createNote);
app.get('/note/:id', NoteController.getNoteById);
app.put('/note/:id', NoteController.updateNote);
app.delete('/note/:id', NoteController.deleteNote);


const MONGODB_URI = "mongodb+srv://iliesskalli2:YNOV2024@cluster0.k3rfemn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error: any) => {
    console.log('Error connecting to MongoDB:', error.message);
  });
