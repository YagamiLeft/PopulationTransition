import React from 'react';
import { CheckboxComponent } from '../../parts/checkbox/checkbox.component';

import './checkbox-list.component.scss';

export type CheckboxListComponentProps = {
  labels: string[];
  onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>, label: string) => void;
};

export const CheckboxListComponent: React.FC<CheckboxListComponentProps> = ({ labels, onChangeCheckbox }) => {
  return (
    <div className="checkbox-list-component">
      {labels.map((label) => {
        return (
          <span key={label}>
            <CheckboxComponent label={label} onChangeCheckbox={onChangeCheckbox} />
          </span>
        );
      })}
    </div>
  );
};
