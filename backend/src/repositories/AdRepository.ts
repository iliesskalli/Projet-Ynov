import Ad from '../models/Ad';

class AdRepository {
  public async createAd(
    titre: string,
    prix: string,
    ville: string,
    superficie: string,
    type: string,
    pieces: number,
    chambres: number,
    meuble?: string,
    etage?: string,
    dpe?: string,
    description?: string,
    parking?: string,
    box?: string,
    cave?: string,
    sousSol?: string,
    garage?: string,
    surfaceDuTerrain?: string,
    ascenseur?: string,
    accesHandicapes?: string
  ): Promise<any> {
    const newAd = new Ad({
      titre,
      prix,
      ville,
      superficie,
      type,
      pieces,
      chambres,
      meuble,
      etage,
      dpe,
      description,
      parking,
      box,
      cave,
      sousSol,
      garage,
      surfaceDuTerrain,
      ascenseur,
      accesHandicapes
    });
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
