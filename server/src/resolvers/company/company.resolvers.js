import { getCompany } from "../../db/companies";
import { getJobsByCompany } from "../../db/jobs";
import { notFoundError } from "../../utils/error-handlers";

export const companyResolvers = {
  Query: {
    company: async (_root, { id }) => {
      const company = await getCompany(id);
      if (!company) {
        throw notFoundError("No Company found with id " + id);
      }
      return company;
    },
  },

  Company: {
    jobs: (company) => getJobsByCompany(company.id),
  },
};
