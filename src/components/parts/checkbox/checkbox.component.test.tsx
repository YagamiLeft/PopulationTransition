import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CheckboxComponent } from './checkbox.component';
test('renders checkbox component with given label', () => {
  const mockLabel = 'Test Label';
  const mockOnChangeCheckbox = jest.fn();

  const { getByLabelText, getByText } = render(
    <CheckboxComponent label={mockLabel} onChangeCheckbox={mockOnChangeCheckbox} />,
  );

  // チェックボックスが正しくレンダリングされたことを確認するアサーション
  expect(getByLabelText(mockLabel)).toBeInTheDocument();

  // ラベルが正しくレンダリングされたことを確認するアサーション
  expect(getByText(mockLabel)).toBeInTheDocument();
});

test('calls onChangeCheckbox handler when checkbox is clicked', () => {
  const mockLabel = 'Test Label';
  const mockOnChangeCheckbox = jest.fn();

  const { getByLabelText } = render(<CheckboxComponent label={mockLabel} onChangeCheckbox={mockOnChangeCheckbox} />);

  // チェックボックスをクリックするイベントをシミュレート
  fireEvent.click(getByLabelText(mockLabel));

  // onChangeCheckboxハンドラが呼び出されたことを確認するアサーション
  expect(mockOnChangeCheckbox).toHaveBeenCalled();
});
