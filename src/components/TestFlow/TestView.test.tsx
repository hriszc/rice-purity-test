import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { TestView } from './TestView';
import { renderWithProviders } from '../../test/testUtils';

vi.mock('../DanmakuBackground', () => ({
  DanmakuBackground: () => <div data-testid="danmaku" />,
}));

const makeProps = () => ({
  progress: 20,
  displayScore: 140,
  currentCategory: {
    min: 0,
    max: 150,
    title: 'Pure',
    text: 'Pure',
    verdict: 'Pure verdict',
  },
  showIntro: false,
  setShowIntro: vi.fn(),
  isShortMode: false,
  setIsShortMode: vi.fn(),
  showHint: true,
  checkedState: [false],
  handleToggle: vi.fn(),
  handleReset: vi.fn(),
  handleSubmit: vi.fn(),
  showBanner: true,
  bannerAnimate: false,
  bannerClosing: false,
  setShowBanner: vi.fn(),
  setBannerClosing: vi.fn(),
  isQuestionIncluded: vi.fn(() => true),
  processedSections: [
    {
      title: 'Section 1',
      questionsToRender: [
        {
          text: 'Kissed a member of the opposite sex',
          emoji: '💋',
          originalIndex: 0,
          displayIndex: 1,
          probability: 83,
        },
      ],
    },
  ],
});

describe('TestView', () => {
  beforeEach(() => {
    vi.stubGlobal('scrollTo', vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders core status and handles submit/reset', () => {
    const props = makeProps();
    renderWithProviders(<TestView {...props} />);

    expect(screen.getByText('Purity Score:')).toBeInTheDocument();
    expect(screen.getByText('140')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Calculate Score'));
    expect(props.handleSubmit).toHaveBeenCalledTimes(1);

    const clearButtons = screen.getAllByText('Clear');
    fireEvent.click(clearButtons[0]);
    expect(props.handleReset).toHaveBeenCalledTimes(1);
  });

  it('routes UI actions to handlers', () => {
    const props = makeProps();
    const { container } = renderWithProviders(<TestView {...props} />);

    fireEvent.click(screen.getByText('Short (30)'));
    expect(props.setIsShortMode).toHaveBeenCalledWith(true);

    fireEvent.click(screen.getByText('Show Instructions'));
    expect(props.setShowIntro).toHaveBeenCalledWith(true);

    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox).not.toBeNull();
    fireEvent.click(checkbox as Element);
    expect(props.handleToggle).toHaveBeenCalledWith(0, true);
  });

  it('closes the ranking banner', () => {
    vi.useFakeTimers();
    const props = makeProps();
    renderWithProviders(<TestView {...props} />);

    fireEvent.click(screen.getByText('✕'));
    expect(props.setBannerClosing).toHaveBeenCalledWith(true);

    vi.advanceTimersByTime(600);
    expect(props.setShowBanner).toHaveBeenCalledWith(false);
    vi.useRealTimers();
  });
});
