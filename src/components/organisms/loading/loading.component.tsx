import React from 'react';
import './loading.component.scss';

type LoadingComponentProps = {
  isLoading: boolean;
};

export const LoadingComponent: React.FC<LoadingComponentProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

LoadingComponent.whyDidYouRender = true;
