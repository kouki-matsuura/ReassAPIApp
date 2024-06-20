import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { DATA_TYPE } from '../constants';
import { DataType, FormatPopulationComposition, PopulationComposition, Prefecture } from '../types';

type PopulationGraphProps = {
  prefectures: Prefecture[];
  prefCodes: string[];
  populations: PopulationComposition[];
  isPopulationLoading: boolean;
};

export const PopulationGraph: React.FC<PopulationGraphProps> = ({
  prefectures,
  prefCodes,
  populations,
  isPopulationLoading,
}) => {
  // 表示するデータの型を保管するstate
  const [populationType, setPopulationType] = useState<DataType>('TOTAL');
  // 表示するデータを保管するstate
  const [formatPopulationData, setFormatPopulationData] = useState<FormatPopulationComposition[]>();

  // 県名を取り出す
  const prefNames: string[] = useMemo(() => {
    return prefCodes.map((prefCode) => prefectures[Number(prefCode) - 1].prefName);
  }, [prefCodes, prefectures]);

  // populationTypeを変更するハンドラ
  const changePopulationTypeHandler = useCallback((type: DataType) => {
    setPopulationType(type);
  }, []);

  // ボタンをレンダする関数
  const RenderButtons: React.FC = memo(() => {
    return (
      <div className="populationButtons">
        <button onClick={() => changePopulationTypeHandler('TOTAL')}>総人口</button>
        <button onClick={() => changePopulationTypeHandler('YOUNG')}>年少人口</button>
        <button onClick={() => changePopulationTypeHandler('WORKING')}>生産年齢人口</button>
        <button onClick={() => changePopulationTypeHandler('ELDERLY')}>老年人口</button>
      </div>
    );
  });

  // データを整形する
  useEffect(() => {
    if (isPopulationLoading) return;
    if (populations.length) {
      const dataLength = populations[0].data[0].data.length;
      const results: FormatPopulationComposition[] = [];
      for (let i = 0; i < dataLength; i++) {
        const initialData: FormatPopulationComposition = {
          year: populations[0].data[DATA_TYPE[populationType]].data[i].year,
        };
        const data: FormatPopulationComposition = prefNames.reduce(
          (acc: FormatPopulationComposition, prefName, index) => {
            acc[prefName] = populations[index].data[DATA_TYPE[populationType]].data[i].value;
            return acc;
          },
          initialData
        );

        results.push(data);
      }

      setFormatPopulationData(results);
    }
  }, [populationType, populations, prefNames, isPopulationLoading]);

  if (!formatPopulationData) return <>表示するデータが存在しません</>;

  return (
    <>
      <RenderButtons />
      <LineChart
        width={700}
        height={400}
        data={formatPopulationData}
        margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" interval={1} padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        {prefNames.map((prefName) => {
          return <Line type="monotone" dataKey={prefName} key={prefName} />;
        })}
      </LineChart>
    </>
  );
};
