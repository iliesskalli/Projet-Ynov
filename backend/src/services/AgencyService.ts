import AgencyRepository from '../repositories/AgencyRepository';
import { Agency as AgencyDocument } from '../models/Agency';

class AgencyService {
  public async createAgency(nom: string, numeroTel: string, mail: string): Promise<AgencyDocument> {
    return await AgencyRepository.createAgency(nom, numeroTel, mail);
  }

  public async updateAgency(id: string, updatedData: Partial<AgencyDocument>): Promise<AgencyDocument | null> {
    return await AgencyRepository.updateAgency(id, updatedData);
  }

  public async deleteAgency(id: string): Promise<void> {
    await AgencyRepository.deleteAgency(id);
  }

  public async getAllAgencies(): Promise<AgencyDocument[]> {
    return await AgencyRepository.getAllAgencies();
  }

  public async getAgencyById(id: string): Promise<AgencyDocument | null> {
    return await AgencyRepository.findAgencyById(id);
  }

  public async getAgencyBy(field: string, value: string): Promise<AgencyDocument[]> {
    return await AgencyRepository.getAgencyBy(field, value);
  }
}

export default new AgencyService();
