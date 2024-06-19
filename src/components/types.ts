import { FieldValues, UseFormRegister } from 'react-hook-form';

// 都道府県情報
export type Prefecture = {
  prefCode: number;
  prefName: string;
};

// 都道府県選択フォーム型
export type PrefecutresProps = {
  prefectures: Prefecture[];
  register: UseFormRegister<FieldValues>;
};

// 人口構成情報
export type PopulationComposition = {
  boundaryYear: number;
  data: {
    label: string;
    data: {
      year: number;
      value: number;
      rate?: number;
    }[];
  }[];
};

// 整形後の人口構成情報
export type FormatPopulationComposition = {
  year: number;
  [prefecture: string]: number;
};

// 表示する情報のタイプ
export type DataType = 'TOTAL' | 'YOUNG' | 'WORKING' | 'ELDERLY';
