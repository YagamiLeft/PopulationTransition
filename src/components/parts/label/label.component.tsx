import React from 'react';

export const LabelComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <label>{children}</label>;
};

LabelComponent.whyDidYouRender = true;
