import React from 'react';
import { PopulationList } from '../../../api/population-composition/population-composition.api';
import { ChartComponent } from '../../organisms/chart/chart.component';
import { CheckboxListComponent } from '../../organisms/checkbox-list/checkbox-list.component';
import { HeaderComponent } from '../../organisms/header/header.component';

import './popuration-transition.template.scss';

export type PopulationCompositionList = {
  prefName: string;
  data: PopulationList[];
};

export type PopulationTransitionTemplateProps = {
  prefectureList: string[];
  populationCompositionList: PopulationCompositionList[];
  onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>, label: string) => void;
};

export const PopulationTransitionTemplate: React.FC<PopulationTransitionTemplateProps> = ({
  prefectureList,
  populationCompositionList,
  onChangeCheckbox,
}) => {
  const xAxisYears = [1980, 1990, 2000, 2010, 2020];
  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: populationCompositionList.map((data) => data.prefName),
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xAxisYears,
    },
    yAxis: {
      type: 'value',
    },
    series: populationCompositionList.map((data) => {
      const [specifyData] = data.data.filter((dataByType) => dataByType.label === '総人口');
      return {
        name: data.prefName,
        type: 'line',
        data: specifyData.data
          .map((chartData) => {
            if (xAxisYears.includes(chartData.year)) return chartData.value;
          })
          .filter((data) => data !== undefined),
      };
    }),
  };
  return (
    <>
      <HeaderComponent title="人口推移" />

      <main className="population-transition-template">
        <div className="prefecture-list">
          <CheckboxListComponent labels={prefectureList} onChangeCheckbox={onChangeCheckbox} />
        </div>

        <ChartComponent chartOption={option} />
      </main>
    </>
  );
};
