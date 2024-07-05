import Agency, { Agency as AgencyDocument } from '../models/Agency';

class AgencyRepository {
  public async createAgency(nom: string, numeroTel: string, mail: string): Promise<AgencyDocument> {
    const newAgency = new Agency({ nom, numeroTel, mail });
    await newAgency.save();
    return newAgency;
  }

  public async findAgencyById(agencyId: string): Promise<AgencyDocument | null> {
    return await Agency.findById(agencyId);
  }

  public async updateAgency(agencyId: string, updatedData: Partial<AgencyDocument>): Promise<AgencyDocument | null> {
    return await Agency.findByIdAndUpdate(agencyId, updatedData, { new: true });
  }

  public async deleteAgency(agencyId: string): Promise<void> {
    await Agency.findByIdAndDelete(agencyId);
  }

  public async getAllAgencies(): Promise<AgencyDocument[]> {
    return await Agency.find();
  }

  public async getAgencyBy(field: string, value: string): Promise<AgencyDocument[]> {
    const query: { [key: string]: string } = {};
    query[field] = value;
    return await Agency.find(query);
  }
}

export default new AgencyRepository();
