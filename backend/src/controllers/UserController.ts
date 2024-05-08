import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  public async register(req: Request, res: Response): Promise<void> {
    try {
      const { nom, prenom, adresse, numeroTel, email, password } = req.body;
      const newUser = await UserService.register(nom, prenom, adresse, numeroTel, email, password);
      res.status(201).json(newUser);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await UserService.findUserByEmail(email);

      if (!user) {
        res.status(401).json({ message: 'Utilisateur non trouvé.' });
        return;
      }

      const isPasswordValid = await UserService.comparePassword(password, user.password);

      if (!isPasswordValid) {
        res.status(401).json({ message: 'Mot de passe incorrect.' });
        return;
      }

      // Vous pouvez générer un jeton JWT ici pour l'authentification

      res.status(200).json({ message: 'Connexion réussie.', user });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async logout(req: Request, res: Response): Promise<void> {
    try {
      // Vous pouvez implémenter la logique de déconnexion ici, par exemple, invalider le jeton JWT
      res.status(200).json({ message: 'Déconnexion réussie.' });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const user = await UserService.findUserById(userId);

      if (!user) {
        res.status(404).json({ message: 'Utilisateur non trouvé.' });
        return;
      }

      res.status(200).json(user);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async getUserByEmail(req: Request, res: Response): Promise<void> {
    try {
      const email = req.params.email;
      const user = await UserService.findUserByEmail(email);

      if (!user) {
        res.status(404).json({ message: 'Utilisateur non trouvé.' });
        return;
      }

      res.status(200).json(user);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async updateUserById(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const updatedData = req.body;
      const updatedUser = await UserService.updateUserById(userId, updatedData);

      res.status(200).json(updatedUser);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async updateUserByEmail(req: Request, res: Response): Promise<void> {
    try {
      const email = req.params.email;
      const updatedData = req.body;
      const updatedUser = await UserService.updateUserByEmail(email, updatedData);

      res.status(200).json(updatedUser);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async deleteUserById(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      await UserService.deleteUserById(userId);
      res.status(204).end(); // No content
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
}

export default new UserController();
