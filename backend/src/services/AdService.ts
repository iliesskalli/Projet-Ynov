import Ad from '../models/Ad';

class AdService {
  public async createAd(titre: string, prix: number, ville: string, superficie: number, type: string, meuble: string, etage: number, dpe: string, description: string): Promise<any> {
    const nouvelleAnnonce = new Ad({ titre, prix, ville, superficie, type, meuble, etage, dpe, description });
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
}

export default new AdService();
