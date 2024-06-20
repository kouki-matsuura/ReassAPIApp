import { Checkbox } from '@/components/atoms/Checkbox';
import { PrefecutresProps } from '@/components/types';
import React, { memo } from 'react';

const M_Prefectures: React.FC<PrefecutresProps> = ({ prefectures }) => {
  return (
    <form>
      {prefectures.map((prefecture, index) => (
        <Checkbox key={index} name={prefecture.prefCode.toString()} label={prefecture.prefName} />
      ))}
    </form>
  );
};

export const Prefectures = memo(M_Prefectures);
