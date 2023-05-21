import React from 'react';

export type RadioComponentProps = {
  label: string;
  isChecked: boolean;
  onChangeRadio: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioComponent: React.FC<RadioComponentProps> = ({ label, isChecked, onChangeRadio }) => {
  return (
    <label>
      <input type="radio" name={label} value={label} checked={isChecked} onChange={(e) => onChangeRadio(e)} />
      {label}
    </label>
  );
};

RadioComponent.whyDidYouRender = true;
