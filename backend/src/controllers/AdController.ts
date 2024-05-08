import { Request, Response } from 'express';
import AdService from '../services/AdService';

class AdController {
  public async createAd(req: Request, res: Response): Promise<void> {
    try {
      const { titre, prix, ville, superficie, type, meuble, etage, dpe, description } = req.body;
      const nouvelleAnnonce = await AdService.createAd(titre, prix, ville, superficie, type, meuble, etage, dpe, description);
      res.status(201).json(nouvelleAnnonce);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async updateAd(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const donneesAnnonceMiseAJour = req.body;
      const annonceMiseAJour = await AdService.updateAd(id, donneesAnnonceMiseAJour);
      res.status(200).json(annonceMiseAJour);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async deleteAd(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await AdService.deleteAd(id);
      res.status(204).end();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getAllAd(req: Request, res: Response): Promise<void> {
    try {
      const allAds = await AdService.getAllAds();
      res.status(200).json(allAds);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getAdById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const ad = await AdService.getAdById(id);
      if (!ad) {
        res.status(404).json({ message: 'Annonce non trouvée' });
        return;
      }
      res.status(200).json(ad);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new AdController();
