// Exemple de script de migration
// Ce script met à jour la structure de la base de données
// ou importe des données initiales

const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb://localhost:27017/projet-final', { useNewUrlParser: true, useUnifiedTopology: true });

const data = [
  { nom: 'John', prenom: 'Doe', email: 'john@example.com' },
  { nom: 'Alice', prenom: 'Smith', email: 'alice@example.com' }
];

async function migrate() {
  try {
    // Supprimer toutes les données existantes
    await User.deleteMany();
    
    // Insérer de nouvelles données
    await User.insertMany(data);

    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Error during migration:', error);
  } finally {
    mongoose.disconnect();
  }
}

migrate();
