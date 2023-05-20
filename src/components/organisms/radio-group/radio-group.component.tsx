import React from 'react';
import { RadioComponent, RadioComponentProps } from '../../parts/radio/radio.component';

export type radioGroupComponent = {
  labels: string[];
  checkedLabel: string;
  onChangeRadio: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioGroupComponent: React.FC<radioGroupComponent> = ({ labels, checkedLabel, onChangeRadio }) => {
  return (
    <fieldset className="radio-group-component">
      {labels.map((label) => {
        const radioComponenProps: RadioComponentProps = {
          label,
          isChecked: label === checkedLabel,
          onChangeRadio,
        };

        return (
          <div key={label} className="radio-item">
            <RadioComponent {...radioComponenProps} />
          </div>
        );
      })}
    </fieldset>
  );
};

RadioGroupComponent.whyDidYouRender = true;
