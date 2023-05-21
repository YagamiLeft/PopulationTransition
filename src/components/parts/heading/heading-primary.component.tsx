import React from 'react';

export const HeadingPrimary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h1>{children}</h1>;
};

HeadingPrimary.whyDidYouRender = true;
