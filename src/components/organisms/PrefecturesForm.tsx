import { Checkbox } from '@/components/atoms/Checkbox';
import { PrefecutresProps } from '@/components/types';
import React from 'react';

export const Prefectures: React.FC<PrefecutresProps> = ({ prefectures, register }) => {
  return (
    <form>
      {prefectures.map((prefecture, index) => (
        <Checkbox key={index} name={prefecture.prefCode.toString()} label={prefecture.prefName} register={register} />
      ))}
    </form>
  );
};
