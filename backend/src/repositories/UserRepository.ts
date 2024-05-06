import User from '../models/User';

class UserRepository {
  public async createUser(nom: string, prenom: string, adresse: string, numeroTel: string, email: string, password: string): Promise<any> {
    const newUser = new User({ nom, prenom, adresse, numeroTel, email, password });
    await newUser.save();
    return newUser;
  }

  public async findUserByEmail(email: string): Promise<any> {
    return await User.findOne({ email });
  }

  public async deleteUser(userId: string): Promise<void> {
    await User.findByIdAndDelete(userId);
  }

  public async deleteUserToken(userId: string): Promise<void> {
    // Code pour supprimer le token de l'utilisateur (hypothétique)
    // Par exemple, si vous stockez le token dans la base de données avec l'utilisateur, vous pouvez le supprimer ici
    // User.updateOne({ _id: userId }, { $unset: { token: 1 } });
  }
}

export default new UserRepository();
