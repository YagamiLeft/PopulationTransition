import React from 'react';
import { PopulationList } from '../../../api/population-composition/population-composition.api';
import { ChartComponent } from '../../organisms/chart/chart.component';
import {
  CheckboxListComponent,
  CheckboxListComponentProps,
} from '../../organisms/checkbox-list/checkbox-list.component';
import { HeaderComponent } from '../../organisms/header/header.component';
import { LoadingComponent } from '../../organisms/loading/loading.component';
import { RadioGroupComponent, RadioGroupComponentProps } from '../../organisms/radio-group/radio-group.component';

import './popuration-transition.template.scss';

export type PopulationCompositionList = {
  prefName: string;
  data: PopulationList[];
};

export type PopulationTransitionTemplateProps = {
  checkboxComponentProps: CheckboxListComponentProps;
  radioGroupComponentProps: RadioGroupComponentProps;
  populationCompositionList: PopulationCompositionList[];
  isLoading: boolean;
  chartDataType: string;
};

export const PopulationTransitionTemplate: React.FC<PopulationTransitionTemplateProps> = ({
  checkboxComponentProps,
  radioGroupComponentProps,
  populationCompositionList,
  isLoading,
  chartDataType,
}) => {
  if (isLoading) {
    return <LoadingComponent isLoading={isLoading} />;
  }

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
      const [specifyData] = data.data.filter((dataByType) => dataByType.label === chartDataType);
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
          <CheckboxListComponent {...checkboxComponentProps} />
        </div>

        {option.series.length > 0 && (
          <>
            <RadioGroupComponent {...radioGroupComponentProps} />
            <ChartComponent chartOption={option} />
          </>
        )}
      </main>
    </>
  );
};

PopulationTransitionTemplate.whyDidYouRender = true;
