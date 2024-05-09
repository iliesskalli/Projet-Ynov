import { Request, Response } from 'express';
import AreaService from '../services/AreaService';

class AreaController {
  public async createArea(req: Request, res: Response): Promise<void> {
    try {
      const { longitude, latitude, name, note } = req.body;
      const newArea = await AreaService.createArea(longitude, latitude, name, note);
      res.status(201).json(newArea);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getAllAreas(req: Request, res: Response): Promise<void> {
    try {
      const areas = await AreaService.getAllAreas();
      res.status(200).json(areas);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getAreaById(req: Request, res: Response): Promise<void> {
    try {
      const areaId = req.params.id;
      const area = await AreaService.getAreaById(areaId);
      if (!area) {
        res.status(404).json({ message: 'Area not found' });
        return;
      }
      res.status(200).json(area);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async updateArea(req: Request, res: Response): Promise<void> {
    try {
      const areaId = req.params.id;
      const updatedData = req.body;
      const updatedArea = await AreaService.updateArea(areaId, updatedData);
      res.status(200).json(updatedArea);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async deleteArea(req: Request, res: Response): Promise<void> {
    try {
      const areaId = req.params.id;
      await AreaService.deleteArea(areaId);
      res.status(204).end();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new AreaController();
