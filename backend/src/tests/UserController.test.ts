import UserController from '../../src/controllers/UserController';

jest.mock('../../src/services/UserService', () => ({
  register: jest.fn(),
  login: jest.fn(),
  logout: jest.fn()
}));

describe('User Controller', () => {
  it('should register a new user', async () => {
    // Votre test pour l'inscription d'un nouvel utilisateur
  });

  it('should login an existing user', async () => {
    const req = {
      body: {
        email: 'john@example.com',
        password: 'password'
      }
    } as any;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as any;

    (UserController.login as jest.Mock).mockResolvedValueOnce('mocked-token');

    await UserController.login(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ token: 'mocked-token' });
  });

  it('should logout a user', async () => {
    const req = {
      body: {
        userId: 'user_id' // Remplacez par l'ID de l'utilisateur connecté
      }
    } as any;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as any;

    (UserController.logout as jest.Mock).mockResolvedValueOnce(undefined);

    await UserController.logout(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'User logged out successfully' });
  });
});
