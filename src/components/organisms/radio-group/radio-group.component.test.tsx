import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RadioGroupComponent } from './radio-group.component';

test('renders radio group component with given labels', () => {
  const mockLabels = ['Option 1', 'Option 2', 'Option 3'];
  const mockCheckedLabel = 'Option 2';
  const mockOnChangeRadio = jest.fn();

  const { getByLabelText } = render(
    <RadioGroupComponent labels={mockLabels} checkedLabel={mockCheckedLabel} onChangeRadio={mockOnChangeRadio} />,
  );

  mockLabels.forEach((label) => {
    expect(getByLabelText(label)).toBeInTheDocument();
  });
});

test('calls onChangeRadio handler when radio button is clicked', () => {
  const mockLabels = ['Option 1', 'Option 2', 'Option 3'];
  const mockCheckedLabel = 'Option 2';
  const mockOnChangeRadio = jest.fn();

  const { getByLabelText } = render(
    <RadioGroupComponent labels={mockLabels} checkedLabel={mockCheckedLabel} onChangeRadio={mockOnChangeRadio} />,
  );

  fireEvent.click(getByLabelText(mockLabels[0]));

  expect(mockOnChangeRadio).toHaveBeenCalled();
});
