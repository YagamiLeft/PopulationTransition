import React from 'react';
import { render } from '@testing-library/react';
import { LabelComponent } from './label.component';

test('renders label component with given children', () => {
  const mockChildren = 'Test Label';

  const { getByText } = render(<LabelComponent>{mockChildren}</LabelComponent>);

  // 子要素が正しくレンダリングされたことを確認するアサーション
  expect(getByText(mockChildren)).toBeInTheDocument();
});
