import React from 'react';

export type CheckboxComponentProps = {
  label: string;
  onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>, label: string) => void;
};

export const CheckboxComponent: React.FC<CheckboxComponentProps> = ({ label, onChangeCheckbox }) => {
  return (
    <label>
      <input type="checkBox" name={label} onChange={(e) => onChangeCheckbox(e, label)} />
      {label}
    </label>
  );
};

CheckboxComponent.whyDidYouRender = true;
