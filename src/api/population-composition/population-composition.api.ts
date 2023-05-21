import { axiosClient } from '../api.base';

export interface PopulationList {
  label: string;
  data: {
    year: number;
    value: number;
  }[];
}

export interface PopulationCompositionAPIRes {
  message?: string;
  result: {
    boundaryYear: number;
    data: PopulationList[];
  };
}

export const getPopulationCompositionAPI = async (prefCode: number, cityCode?: string) => {
  const params = { prefCode, cityCode: cityCode ? cityCode : '-' };
  const { data } = await axiosClient.get<PopulationCompositionAPIRes>('/api/population-composition', { params });
  return data;
};
