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
    const user = await this.findUserByEmail(email);
    if (!user) {
      throw new Error('Email not found');
    }

    const isPasswordValid = await this.comparePassword(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ userId: user._id }, this.JWT_SECRET, { expiresIn: '1h' });
    return token;
  }

  public async logout(userId: string): Promise<void> {
    // Supprimer le token de l'utilisateur en base de données
    await UserRepository.deleteUserToken(userId);
  }

  public async findUserByEmail(email: string): Promise<any> {
    return await UserRepository.findUserByEmail(email);
  }

  public async findUserById(userId: string): Promise<any> {
    return await UserRepository.findUserById(userId);
  }

  public async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    const hashedInputPassword = this.hashPassword(password);
    return hashedInputPassword === hashedPassword;
  }

  public async deleteUserById(userId: string): Promise<void> {
    await UserRepository.deleteUser(userId);
  }

  private hashPassword(password: string): string {
    const hash = createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
  }

  public async updateUserByEmail(email: string, updatedData: any): Promise<any> {
    return await UserRepository.updateUserByEmail(email, updatedData);
  }

  public async updateUserById(userId: string, updatedData: any): Promise<any> {
    return await UserRepository.updateUserById(userId, updatedData);
  }
}

export default new UserService();
