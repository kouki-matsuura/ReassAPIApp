import { PopulationGraph } from '@/components/organisms/PopulationsGraph';
import { Prefectures } from '@/components/organisms/PrefecturesForm';
import { PopulationComposition, Prefecture } from '@/components/types';

type AppProps = {
  prefectures: Prefecture[];
  populations: PopulationComposition[];
  prefCodes: string[];
  isPopulationLoading: boolean;
};

export const AppPresenter: React.FC<AppProps> = ({ prefectures, populations, prefCodes, isPopulationLoading }) => {
  return (
    <>
      <Prefectures prefectures={prefectures} />
      <PopulationGraph
        prefectures={prefectures}
        populations={populations}
        prefCodes={prefCodes}
        isPopulationLoading={isPopulationLoading}
      />
    </>
  );
};
