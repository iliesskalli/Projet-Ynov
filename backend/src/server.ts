import express from 'express';
import mongoose from 'mongoose';
import UserController from './controllers/UserController';
import AdController from './controllers/AdController';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes pour les utilisateurs
app.post('/register', UserController.register);
app.post('/login', UserController.login);
app.post('/logout', UserController.logout);

// Routes pour les annonces
app.post('/ad', AdController.createAd);
app.put('/ad/:id', AdController.updateAd);
app.delete('/ad/:id', AdController.deleteAd);

mongoose.connect('mongodb://iliesskalli2:YNOV2024@cluster0.k3rfemn.mongodb.net/projet-final', {
  useNewUrlParser: true,  
  useUnifiedTopology: true
} as any) //  

  .then(() => {
    app.listen(PORT, () => {
      console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erreur de connexion à MongoDB :', error.message);
  });
