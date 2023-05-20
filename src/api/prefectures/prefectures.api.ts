import { axiosClient } from '../api.base';

export interface PrefectureList {
  prefCode: number;
  prefName: string;
}

export interface GetPrefectureAPIRes {
  message: string;
  result: PrefectureList[];
}

export const getPrefecturesAPI = async () => {
  const { data } = await axiosClient.get<GetPrefectureAPIRes>('/api/prefectures');
  return data;
};
