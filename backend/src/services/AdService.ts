import Ad from '../models/Ad';

class AdService {
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
    const nouvelleAnnonce = new Ad({
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
    await nouvelleAnnonce.save();
    return nouvelleAnnonce;
  }

  public async updateAd(id: string, donneesAnnonceMiseAJour: any): Promise<any> {
    try {
      const annonceMiseAJour = await Ad.findByIdAndUpdate(id, donneesAnnonceMiseAJour, { new: true });
      return annonceMiseAJour;
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'annonce :', error);
      throw new Error('Échec de la mise à jour de l\'annonce');
    }
  }

  public async deleteAd(id: string): Promise<void> {
    try {
      await Ad.findByIdAndDelete(id);
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'annonce :', error);
      throw new Error('Échec de la suppression de l\'annonce');
    }
  }

  public async getAllAds(): Promise<any> {
    try {
      const allAds = await Ad.find();
      return allAds;
    } catch (error) {
      console.error('Erreur lors de la récupération de toutes les annonces :', error);
      throw new Error('Échec de la récupération de toutes les annonces');
    }
  }

  public async getAdById(id: string): Promise<any> {
    try {
      const ad = await Ad.findById(id);
      return ad;
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'annonce par ID :', error);
      throw new Error('Échec de la récupération de l\'annonce par ID');
    }
  }

  public async getAdBy(field: string, value: any): Promise<any> {
    try {
      const query = { [field]: value };
      const ads = await Ad.find(query);
      return ads;
    } catch (error) {
      console.error(`Erreur lors de la récupération des annonces par ${field} :`, error);
      throw new Error(`Échec de la récupération des annonces par ${field}`);
    }
  }
}

export default new AdService();
