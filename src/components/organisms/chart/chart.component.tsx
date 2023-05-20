import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';

export const ChartComponent: React.FC<{ chartOption: EChartsOption }> = ({ chartOption }) => {
  return <ReactECharts option={chartOption} notMerge={true} lazyUpdate={true} />;
};
