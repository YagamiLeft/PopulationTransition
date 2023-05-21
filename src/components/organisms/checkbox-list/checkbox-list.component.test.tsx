import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CheckboxListComponent } from './checkbox-list.component';

test('renders checkbox list component with given labels', () => {
  const mockLabels = ['Label 1', 'Label 2', 'Label 3'];
  const mockOnChangeCheckbox = jest.fn();

  const { getByText } = render(<CheckboxListComponent labels={mockLabels} onChangeCheckbox={mockOnChangeCheckbox} />);

  mockLabels.forEach((label) => {
    expect(getByText(label)).toBeInTheDocument();
  });
});

test('calls onChangeCheckbox handler when checkbox is clicked', () => {
  const mockLabels = ['Label 1', 'Label 2', 'Label 3'];
  const mockOnChangeCheckbox = jest.fn();

  const { getByLabelText } = render(
    <CheckboxListComponent labels={mockLabels} onChangeCheckbox={mockOnChangeCheckbox} />,
  );

  fireEvent.click(getByLabelText(mockLabels[0]));

  expect(mockOnChangeCheckbox).toHaveBeenCalled();
  expect(mockOnChangeCheckbox).toHaveBeenCalledWith(expect.any(Object), mockLabels[0]);
});
