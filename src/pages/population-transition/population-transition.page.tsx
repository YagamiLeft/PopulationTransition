import React from 'react';
import { getPrefecturesAPI } from '../../api/prefectures/prefectures.api';
import {
  PopulationTransitionTemplate,
  PopulationTransitionTemplateProps,
} from '../../components/templates/population-transition/population-transition.template';

export const PopulationTransitionPage: React.FC = () => {
  const { data: prefectureData, isLoading, error } = getPrefecturesAPI();

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>, label: string) => {
    console.log(event.target.checked);
    console.log(label);
  };

  const props: PopulationTransitionTemplateProps = {
    prefectureList: prefectureData ? prefectureData.result.map((data) => data.prefName) : [],
    onChangeCheckbox,
  };
  return <PopulationTransitionTemplate {...props} />;
};

PopulationTransitionPage.whyDidYouRender = true;
