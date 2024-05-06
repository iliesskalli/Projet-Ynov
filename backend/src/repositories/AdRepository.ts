import Ad from '../models/Ad';

class AdRepository {
  public async createAd(titre: string, prix: number, ville: string, superficie: number): Promise<any> {
    const newAd = new Ad({ titre, prix, ville, superficie });
    await newAd.save();
    return newAd;
  }

  public async findAdById(adId: string): Promise<any> {
    return await Ad.findById(adId);
  }

  public async updateAd(adId: string, updatedData: any): Promise<any> {
    return await Ad.findByIdAndUpdate(adId, updatedData, { new: true });
  }

  public async deleteAd(adId: string): Promise<void> {
    await Ad.findByIdAndDelete(adId);
  }
}

export default new AdRepository();
