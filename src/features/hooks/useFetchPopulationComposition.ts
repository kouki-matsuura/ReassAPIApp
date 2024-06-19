import { useInternalApi } from '@/common/hooks/useInternalApiHook';
import { PopulationComposition } from '@/components/types';
import { GET_POPULATION_COMPOSITION } from '@/queryKey';
import { useQueries } from 'react-query';

export const useFetchPopulationComposition = (
  prefCodes: string[]
): {
  datas: PopulationComposition[];
  isLoading: boolean;
} => {
  const queryKey = GET_POPULATION_COMPOSITION;
  const { get } = useInternalApi();

  const queries = prefCodes.map((prefCode) => ({
    queryKey: [queryKey, prefCode],
    queryFn: () =>
      get('/population/composition/perYear', {
        prefCode: Number(prefCode),
        cityCode: '-',
      }),
    enabled: !!prefCode,
  }));

  const results = useQueries(queries);

  const datas: PopulationComposition[] = results.map((result) => result.data);
  const isLoading: boolean = results.some((result) => result.isLoading);
  return {
    datas,
    isLoading,
  };
};
