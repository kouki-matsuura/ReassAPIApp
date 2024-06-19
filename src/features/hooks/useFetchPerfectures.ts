import { useInternalApi } from '@/common/hooks/useInternalApiHook';
import { Prefecture } from '@/components/types';
import { GET_PREFECTURES } from '@/queryKey';
import { useQuery } from 'react-query';

export const useFetchPerfectures = () => {
  const queryKey = GET_PREFECTURES;
  const { get } = useInternalApi();

  const { isLoading, error, data } = useQuery<Prefecture[]>(queryKey, () => get('/prefectures'));

  return {
    isLoading,
    error,
    data,
  };
};
