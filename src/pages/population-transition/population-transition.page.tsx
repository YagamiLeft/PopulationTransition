import React from 'react';
import {
  PopulationTransitionTemplate,
  PopulationTransitionTemplateProps,
} from '../../components/templates/population-transition/population-transition.template';

export const PopulationTransitionPage: React.FC = () => {
  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>, label: string) => {
    console.log(event.target.checked);
    console.log(label);
  };

  const props: PopulationTransitionTemplateProps = {
    prefectureList: ['北海道', '大阪', '東京'],
    onChangeCheckbox,
  };
  return <PopulationTransitionTemplate {...props} />;
};
