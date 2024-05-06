import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  public async register(req: Request, res: Response): Promise<void> {
    try {
      const { nom, prenom, adresse, numeroTel, email, password } = req.body;
      const newUser = await UserService.register(nom, prenom, adresse, numeroTel, email, password);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const token = await UserService.login(email, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  public async logout(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.body;
      await UserService.logout(userId);
      res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new UserController();
