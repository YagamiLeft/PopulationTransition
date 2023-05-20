import useSWR from 'swr';
import { axiosClient } from '../api.base';
import { AxiosResponse } from 'axios';

interface FetchProps {
  url: string;
}

export interface PrefectureList {
  prefCode: number;
  prefName: string;
}

export interface PrefectureAPIres {
  message?: string;
  result: PrefectureList[];
}

const fetch = <PrefectureAPIres>(props: FetchProps): Promise<PrefectureAPIres> =>
  axiosClient.get(props.url).then((res: AxiosResponse<PrefectureAPIres>) => res.data);

export const getPrefecturesAPI = () => {
  const { data, isLoading, error } = useSWR<PrefectureAPIres, Error>(
    {
      url: '/api/prefectures',
    },
    fetch,
  );

  return { data, isLoading, error };
};
