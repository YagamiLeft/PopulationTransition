import React from 'react';
import { HeadingPrimary } from '../../parts/heading/heading-primary.component';

import './header.component.scss';

export const HeaderComponent: React.FC = () => {
  return (
    <header className="header-component">
      <HeadingPrimary>人口推移</HeadingPrimary>
    </header>
  );
};

HeaderComponent.whyDidYouRender = true;
