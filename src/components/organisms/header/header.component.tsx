import React from 'react';
import { HeadingPrimary } from '../../parts/heading/heading-primary.component';

import './header.component.scss';

export const HeaderComponent: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header className="header-component">
      <HeadingPrimary>{title}</HeadingPrimary>
    </header>
  );
};

HeaderComponent.whyDidYouRender = true;
