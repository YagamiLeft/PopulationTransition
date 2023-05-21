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

  expect(getByLabelText(mockLabel)).toBeInTheDocument();

  expect(getByText(mockLabel)).toBeInTheDocument();

  expect(getByLabelText(mockLabel)).toBeChecked();
});

test('calls onChangeRadio handler when radio button is clicked', () => {
  const mockLabel = 'Test Radio';
  const mockIsChecked = false;
  const mockOnChangeRadio = jest.fn();

  const { getByLabelText } = render(
    <RadioComponent label={mockLabel} isChecked={mockIsChecked} onChangeRadio={mockOnChangeRadio} />,
  );

  fireEvent.click(getByLabelText(mockLabel));

  expect(mockOnChangeRadio).toHaveBeenCalled();
});
