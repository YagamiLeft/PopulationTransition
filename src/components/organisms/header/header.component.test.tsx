import React from 'react';
import { render } from '@testing-library/react';
import { HeaderComponent } from './header.component';

test('renders header component with given title', () => {
  const mockTitle = 'Test Title';

  const { getByText } = render(<HeaderComponent title={mockTitle} />);

  // タイトルが正しくレンダリングされたことを確認するアサーション
  expect(getByText(mockTitle)).toBeInTheDocument();
});
