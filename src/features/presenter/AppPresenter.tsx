import { PopulationGraph } from '@/components/organisms/PopulationsGraph';
import { Prefectures } from '@/components/organisms/PrefecturesForm';
import { PopulationComposition, Prefecture } from '@/components/types';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type AppProps = {
  prefectures: Prefecture[];
  populations: PopulationComposition[];
  prefCodes: string[];
  register: UseFormRegister<FieldValues>;
};

export const AppPresenter: React.FC<AppProps> = ({ prefectures, populations, prefCodes, register }) => {
  return (
    <>
      <Prefectures prefectures={prefectures} register={register} />
      <PopulationGraph prefectures={prefectures} populations={populations} prefCodes={prefCodes} />
    </>
  );
};
