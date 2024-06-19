import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFetchPerfectures } from '../hooks/useFetchPerfectures';
import { useFetchPopulationComposition } from '../hooks/useFetchPopulationComposition';
import { AppPresenter } from '../presenter/AppPresenter';

export const AppContainer: React.FC = () => {
  const { register, watch, handleSubmit, getValues } = useForm();
  const [prefCodes, setPrefCodes] = useState<string[]>([]);
  const { isLoading: isPrefecturesLoading, error, data: prefectures } = useFetchPerfectures();
  const { datas: populations, isLoading: isPopulationLoading } = useFetchPopulationComposition(prefCodes);

  const onSubmit = useCallback(() => {
    const values = getValues();
    const targetKeys = Object.keys(values).filter((key) => values[key]);
    setPrefCodes(targetKeys);
  }, [getValues]);

  useEffect(() => {
    const subscription = watch(() => {
      handleSubmit(onSubmit)();
    });
    return () => subscription.unsubscribe();
  }, [watch, handleSubmit, onSubmit]);

  if (isPrefecturesLoading || !prefectures || isPopulationLoading) {
    return <div>ロード中...</div>;
  }

  if (error) {
    return <div>取得できませんでした</div>;
  }

  const args = {
    prefectures,
    populations,
    prefCodes,
    register,
  };

  return <AppPresenter {...args} />;
};
