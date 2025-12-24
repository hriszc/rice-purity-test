import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { act, render } from '@testing-library/react';
import { DanmakuBackground } from './DanmakuBackground';

describe('DanmakuBackground', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders danmaku items after delay', () => {
    vi.useFakeTimers();
    Object.defineProperty(window, 'innerWidth', {
      value: 1024,
      configurable: true,
    });

    const { container } = render(<DanmakuBackground />);
    expect(container.querySelector('.danmaku-container')).toBeNull();

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    const items = container.querySelectorAll('.danmaku-item');
    expect(items.length).toBeGreaterThan(0);
  });
});
