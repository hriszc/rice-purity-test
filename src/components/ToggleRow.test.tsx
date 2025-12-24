import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { ToggleRow } from './ToggleRow';

describe('ToggleRow', () => {
  it('fires onChange for clicks and key presses', () => {
    const onChange = vi.fn();
    const { container } = render(
      <ToggleRow
        index={1}
        label="Test label"
        checked={false}
        onChange={onChange}
      />
    );

    const checkboxInput = container.querySelector('input[type="checkbox"]');
    expect(checkboxInput).not.toBeNull();
    fireEvent.click(checkboxInput as Element);
    expect(onChange).toHaveBeenCalledWith(true);

    const checkboxLabel = container.querySelector('label.toggle-row');
    expect(checkboxLabel).not.toBeNull();
    fireEvent.keyDown(checkboxLabel as Element, { key: 'Enter' });
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
