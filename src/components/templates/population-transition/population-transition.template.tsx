import React from 'react';
import { CheckboxListComponent } from '../../organisms/checkbox-list/checkbox-list.component';
import { HeaderComponent } from '../../organisms/header/header.component';

import './popuration-transition.template.scss';

export type PopulationTransitionTemplateProps = {
  prefectureList: string[];
  onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>, label: string) => void;
};

export const PopulationTransitionTemplate: React.FC<PopulationTransitionTemplateProps> = ({
  prefectureList,
  onChangeCheckbox,
}) => {
  return (
    <>
      <HeaderComponent title="人口推移" />

      <main className="population-transition-template">
        <div className="prefecture-list">
          <CheckboxListComponent labels={prefectureList} onChangeCheckbox={onChangeCheckbox} />
        </div>
      </main>
    </>
  );
};
