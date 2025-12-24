import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useTestFlow } from './useTestFlow';

describe('useTestFlow hook', () => {
  beforeEach(() => {
    vi.stubGlobal('scrollTo', vi.fn());
    vi.stubGlobal('confirm', vi.fn(() => true));
  });

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useTestFlow());
    expect(result.current.view).toBe('test');
    expect(result.current.isShortMode).toBe(false);
    expect(result.current.displayScore).toBe(150);
  });

  it('should toggle a question', () => {
    const { result } = renderHook(() => useTestFlow());
    act(() => {
      result.current.handleToggle(0, true);
    });
    expect(result.current.checkedState[0]).toBe(true);
    expect(result.current.displayScore).toBe(149);
  });

  it('should switch to short mode', () => {
    const { result } = renderHook(() => useTestFlow());
    act(() => {
      result.current.setIsShortMode(true);
    });
    expect(result.current.isShortMode).toBe(true);
    // Perfect score in short mode is also 150 because (30-0)*5 = 150
    expect(result.current.displayScore).toBe(150);
  });

  it('should handle submit and retake', () => {
    const { result } = renderHook(() => useTestFlow());
    act(() => {
      result.current.handleSubmit();
    });
    expect(result.current.view).toBe('results');
    expect(result.current.rankingDetails).not.toBeNull();

    act(() => {
      result.current.handleRetake();
    });
    expect(result.current.view).toBe('test');
  });

  it('should handle reset', () => {
    const { result } = renderHook(() => useTestFlow());
    act(() => {
      result.current.handleToggle(0, true);
    });
    expect(result.current.displayScore).toBe(149);

    act(() => {
      result.current.handleReset();
    });
    expect(result.current.checkedState[0]).toBe(false);
    expect(result.current.displayScore).toBe(150);
  });
});
