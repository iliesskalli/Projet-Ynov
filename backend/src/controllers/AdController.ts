import { Request, Response } from 'express';
import AdService from '../services/AdService';

class AdController {
  public async createAd(req: Request, res: Response): Promise<void> {
    try {
      const { titre, prix, ville, superficie, type, meuble, etage, dpe, description } = req.body;
      const nouvelleAnnonce = await AdService.createAd(titre, prix, ville, superficie, type, meuble, etage, dpe, description);
      res.status(201).json(nouvelleAnnonce);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  public async updateAd(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const donneesAnnonceMiseAJour = req.body;
      const annonceMiseAJour = await AdService.updateAd(id, donneesAnnonceMiseAJour);
      res.status(200).json(annonceMiseAJour);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  public async deleteAd(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await AdService.deleteAd(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new AdController();
