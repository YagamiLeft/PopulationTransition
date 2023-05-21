import React from 'react';
import { render } from '@testing-library/react';
import { HeadingPrimary } from './heading-primary.component';

test('renders heading component with given children', () => {
  const mockChildren = 'Test Heading';

  const { getByText } = render(<HeadingPrimary>{mockChildren}</HeadingPrimary>);

  // 子要素が正しくレンダリングされたことを確認するアサーション
  expect(getByText(mockChildren)).toBeInTheDocument();
});
