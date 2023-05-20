import useSWR from 'swr';
import { axiosClient } from '../api.base';
import { AxiosResponse } from 'axios';

interface FetcheWithParamsProps {
  url: string;
  params: object;
}

export interface PopulationList {
  label: string;
  data: {
    year: number;
    calue: number;
  };
}

export interface PopulationCompositionAPIRes {
  message?: string;
  result: {
    boundaryYear: number;
    data: PopulationList[];
  };
}

const fetcheWithParams = <PopulationCompositionAPIRes>(
  props: FetcheWithParamsProps,
): Promise<PopulationCompositionAPIRes> =>
  axiosClient
    .get(props.url, {
      params: {
        ...props.params,
      },
    })
    .then((res: AxiosResponse<PopulationCompositionAPIRes>) => res.data);

export const getPopulationCompositionAPI = (prefCode: number, cityCode?: string) => {
  const params = { prefCode, cityCode: cityCode ? cityCode : '-' };
  const { data, isLoading, error } = useSWR<PopulationCompositionAPIRes, Error>(
    {
      url: '/api/population-composition',
      params,
    },
    fetcheWithParams,
  );

  return { data, isLoading, error };
};
