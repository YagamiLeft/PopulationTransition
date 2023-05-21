import React from 'react';
import { render } from '@testing-library/react';
import { LoadingComponent } from './loading.component';

test('renders loading overlay when isLoading is true', () => {
  const { container } = render(<LoadingComponent isLoading={true} />);

  // ローディングオーバーレイが表示されることを確認するアサーション
  expect(container.querySelector('.loading-overlay')).toBeInTheDocument();
});

test('does not render loading overlay when isLoading is false', () => {
  const { container } = render(<LoadingComponent isLoading={false} />);

  // ローディングオーバーレイが表示されないことを確認するアサーション
  expect(container.querySelector('.loading-overlay')).not.toBeInTheDocument();
});
