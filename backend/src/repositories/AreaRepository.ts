import Area, { Area as AreaType } from '../models/Area';

class AreaRepository {
  public async createArea(longitude: number, latitude: number, name: string, rating: number): Promise<AreaType> {
    const newArea = new Area({ longitude, latitude, name, rating });
    await newArea.save();
    return newArea;
  }

  public async getAllAreas(): Promise<AreaType[]> {
    return await Area.find();
  }

  public async getAreaById(id: string): Promise<AreaType | null> {
    return await Area.findById(id);
  }

  public async updateArea(id: string, updatedData: Partial<AreaType>): Promise<AreaType | null> {
    return await Area.findByIdAndUpdate(id, updatedData, { new: true });
  }

  public async deleteArea(id: string): Promise<void> {
    await Area.findByIdAndDelete(id);
  }
}

export default new AreaRepository();
