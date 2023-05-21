import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CheckboxComponent } from './checkbox.component';
test('renders checkbox component with given label', () => {
  const mockLabel = 'Test Label';
  const mockOnChangeCheckbox = jest.fn();

  const { getByLabelText, getByText } = render(
    <CheckboxComponent label={mockLabel} onChangeCheckbox={mockOnChangeCheckbox} />,
  );

  expect(getByLabelText(mockLabel)).toBeInTheDocument();

  expect(getByText(mockLabel)).toBeInTheDocument();
});

test('calls onChangeCheckbox handler when checkbox is clicked', () => {
  const mockLabel = 'Test Label';
  const mockOnChangeCheckbox = jest.fn();

  const { getByLabelText } = render(<CheckboxComponent label={mockLabel} onChangeCheckbox={mockOnChangeCheckbox} />);

  fireEvent.click(getByLabelText(mockLabel));

  expect(mockOnChangeCheckbox).toHaveBeenCalled();
});
