import axios from "axios";

//
import type {
  IApiTechCompanyList,
  IApiGovernmentWebsiteList,
} from "../types/apis.types";

/**
 *
 */
export async function getTechCompanies() {
  const response = await axios.get<IApiTechCompanyList>(
    "https://raw.githubusercontent.com/Know-Nepal/tech-companies/main/data/companies.json",
  );
  return response.data.companies;
}

/**
 *
 */
export async function getGovernmentWebsites() {
  const response = await axios.get<IApiGovernmentWebsiteList>(
    "https://raw.githubusercontent.com/Know-Nepal/government-websites/main/data/websites.json",
  );
  return response.data.items;
}
