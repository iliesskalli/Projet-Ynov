import UserRepository from '../repositories/UserRepository';
import { createHash } from 'crypto';
import jwt from 'jsonwebtoken';

class UserService {
  private readonly JWT_SECRET = 'your_secret_key';  

  public async register(nom: string, prenom: string, adresse: string, numeroTel: string, email: string, password: string): Promise<any> {
    const hashedPassword = this.hashPassword(password);
    const newUser = await UserRepository.createUser(nom, prenom, adresse, numeroTel, email, hashedPassword);
    return newUser;
  }

  public async login(email: string, password: string): Promise<string> {
    const user = await UserRepository.findUserByEmail(email);
    if (!user) {
      throw new Error('Email not found');
    }

    const hashedPassword = this.hashPassword(password);
    if (user.password !== hashedPassword) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ userId: user._id }, this.JWT_SECRET, { expiresIn: '1h' });
    return token;
  }

  public async logout(userId: string): Promise<void> {
    // Supprimer le token de l'utilisateur en base de données
    await UserRepository.deleteUserToken(userId);
  }

  private hashPassword(password: string): string {
    const hash = createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
  }
}

export default new UserService();
