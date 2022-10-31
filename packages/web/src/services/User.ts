import { AxiosResponse } from "axios";
import { api } from "./Api";

type user = {
  name: string;
  email: string;
  github: string;
  level: string;
  address: address;
};

type address = {
  zip_code: string;
  road: string;
  district: string;
  city: string;
};

export const createUser = async (data: user): Promise<AxiosResponse<user>> => {
  const response = await api.post("/user", data);
  return response;
};
