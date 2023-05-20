import { axiosClient } from '../api.base';

export const getPrefecturesAPI = async () => {
  const { data } = await axiosClient.get('/api/prefectures');
  console.log(data);
  return data;
};
