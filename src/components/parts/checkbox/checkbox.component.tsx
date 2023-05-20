import React from 'react';

export type CheckboxComponentProps = {
  onChnageCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CheckboxComponent: React.FC<CheckboxComponentProps> = ({ onChnageCheckbox }) => {
  return <input type="checkBox" onChange={(e) => onChnageCheckbox(e)} />;
};

CheckboxComponent.whyDidYouRender = true;
