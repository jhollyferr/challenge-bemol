import { AxiosResponse } from "axios";
import { viaCepApi } from "./ViaCep";

type address = {
  erro?: boolean;
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  ibge?: number;
  gia?: string;
  ddd?: number;
  siafi?: number;
};

export const getAddress = async (
  cep: string
): Promise<AxiosResponse<address>> => {
  const response = await viaCepApi.get(`${cep}/json`);
  return response;
};
