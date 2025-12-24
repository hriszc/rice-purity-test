import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { ResultsView } from './ResultsView';
import { renderWithProviders } from '../../test/testUtils';

vi.mock('../DanmakuBackground', () => ({
  DanmakuBackground: () => <div data-testid="danmaku" />,
}));

const makeProps = () => ({
  displayScore: 123,
  rankingDetails: {
    rankingLabel: 'Very Pure',
    fullVerdict: 'You are doing great.',
    shareText: 'I scored 123!',
    isFlipped: false,
    pPurerOrEqual: 0.2,
    pLessPureOrEqual: 0.8,
    currentCategory: {
      min: 0,
      max: 150,
      title: 'Pure',
      text: 'Pure',
      verdict: 'Pure verdict',
    },
  },
  categoryScores: [
    { label: 'Romance', value: 75 },
    { label: 'Boldness', value: 50 },
  ],
  handleRetake: vi.fn(),
  handleReset: vi.fn(),
  setView: vi.fn(),
});

describe('ResultsView', () => {
  beforeEach(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: vi.fn() },
      configurable: true,
    });
    vi.stubGlobal('alert', vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders results and handles navigation actions', () => {
    const props = makeProps();
    renderWithProviders(<ResultsView {...props} />);

    expect(screen.getByText('Results')).toBeInTheDocument();
    expect(screen.getByText('Very Pure')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Back'));
    expect(props.setView).toHaveBeenCalledWith('test');

    fireEvent.click(screen.getByText('Review Answers'));
    expect(props.handleRetake).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('Start Over'));
    expect(props.handleReset).toHaveBeenCalledTimes(1);
  });

  it('copies embed code to clipboard', () => {
    const props = makeProps();
    renderWithProviders(<ResultsView {...props} />);

    const copyButtons = screen.getAllByText('Copy');
    fireEvent.click(copyButtons[0]);

    expect(navigator.clipboard.writeText).toHaveBeenCalled();
    expect(alert).toHaveBeenCalled();
  });
});
