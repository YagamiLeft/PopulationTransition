import { axiosClient } from '../api.base';

export const getPopulationCompositionAPI = async (prefCode: number, cityCode?: string) => {
  const params = { prefCode, cityCode: cityCode ? cityCode : '-' };
  const { data } = await axiosClient.get('/api/population-composition', { params });
  console.log(data);
  return data;
};
