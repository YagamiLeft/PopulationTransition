import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RadioComponent } from './radio.component';

test('renders radio component with given label and checked state', () => {
  const mockLabel = 'Test Radio';
  const mockIsChecked = true;
  const mockOnChangeRadio = jest.fn();

  const { getByLabelText, getByText } = render(
    <RadioComponent label={mockLabel} isChecked={mockIsChecked} onChangeRadio={mockOnChangeRadio} />,
  );

  // ラジオボタンが正しくレンダリングされたことを確認するアサーション
  expect(getByLabelText(mockLabel)).toBeInTheDocument();

  // ラベルが正しくレンダリングされたことを確認するアサーション
  expect(getByText(mockLabel)).toBeInTheDocument();

  // チェックされている状態でレンダリングされたことを確認するアサーション
  expect(getByLabelText(mockLabel)).toBeChecked();
});

test('calls onChangeRadio handler when radio button is clicked', () => {
  const mockLabel = 'Test Radio';
  const mockIsChecked = false;
  const mockOnChangeRadio = jest.fn();

  const { getByLabelText } = render(
    <RadioComponent label={mockLabel} isChecked={mockIsChecked} onChangeRadio={mockOnChangeRadio} />,
  );

  // ラジオボタンをクリックするイベントをシミュレート
  fireEvent.click(getByLabelText(mockLabel));

  // onChangeRadioハンドラが呼び出されたことを確認するアサーション
  expect(mockOnChangeRadio).toHaveBeenCalled();
});
