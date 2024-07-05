import { Request, Response } from 'express';
import AgencyService from '../services/AgencyService';

class AgencyController {
  public async createAgency(req: Request, res: Response): Promise<void> {
    try {
      const { nom, numeroTel, mail } = req.body;
      const newAgency = await AgencyService.createAgency(nom, numeroTel, mail);
      res.status(201).json(newAgency);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async updateAgency(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const updatedAgency = await AgencyService.updateAgency(id, updatedData);
      res.status(200).json(updatedAgency);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async deleteAgency(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await AgencyService.deleteAgency(id);
      res.status(204).end();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getAllAgencies(req: Request, res: Response): Promise<void> {
    try {
      const allAgencies = await AgencyService.getAllAgencies();
      res.status(200).json(allAgencies);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getAgencyById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const agency = await AgencyService.getAgencyById(id);
      if (!agency) {
        res.status(404).json({ message: 'Agence non trouvée' });
        return;
      }
      res.status(200).json(agency);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getAgencyBy(req: Request, res: Response): Promise<void> {
    try {
      const { field, value } = req.params;
      const agencies = await AgencyService.getAgencyBy(field, value);
      res.status(200).json(agencies);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new AgencyController();
