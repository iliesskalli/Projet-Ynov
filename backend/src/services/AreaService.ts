import AreaRepository from '../repositories/AreaRepository';
import { Area } from '../models/Area';

class AreaService {
  public async createArea(longitude: number, latitude: number, name: string, rating: number): Promise<Area> {
    return await AreaRepository.createArea(longitude, latitude, name, rating);
  }

  public async getAllAreas(): Promise<Area[]> {
    return await AreaRepository.getAllAreas();
  }

  public async getAreaById(id: string): Promise<Area | null> {
    return await AreaRepository.getAreaById(id);
  }

  public async updateArea(id: string, updatedData: Partial<Area>): Promise<Area | null> {
    return await AreaRepository.updateArea(id, updatedData);
  }

  public async deleteArea(id: string): Promise<void> {
    await AreaRepository.deleteArea(id);
  }
}

export default new AreaService();
