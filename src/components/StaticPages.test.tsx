import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../test/testUtils';
import { AboutPage } from './AboutPage';
import { ScoreMeanings } from './ScoreMeanings';
import { RiceThresherPage } from './RiceThresherPage';
import { WhatIsFrenchKissing } from './WhatIsFrenchKissing';

vi.mock('./DanmakuBackground', () => ({
  DanmakuBackground: () => <div data-testid="danmaku" />,
}));

describe('Static pages', () => {
  it('renders About page content', () => {
    renderWithProviders(<AboutPage />);
    expect(screen.getByRole('heading', { level: 1, name: 'About & Privacy' })).toBeInTheDocument();
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
  });

  it('renders score meanings page content', () => {
    renderWithProviders(<ScoreMeanings />);
    expect(screen.getByRole('heading', { level: 1, name: 'Rice Purity Test Score Meanings' })).toBeInTheDocument();
    expect(screen.getByText('Understanding Your Score')).toBeInTheDocument();
  });

  it('renders rice thresher source page content', () => {
    renderWithProviders(<RiceThresherPage />);
    expect(screen.getByText('Rice Test Source')).toBeInTheDocument();
    expect(screen.getByText('Rice Test: Original 1988 Source')).toBeInTheDocument();
  });

  it('renders French kissing page content', () => {
    renderWithProviders(<WhatIsFrenchKissing />);
    expect(screen.getByRole('heading', { level: 1, name: 'What is French Kissing? Meaning & Guide' })).toBeInTheDocument();
  });
});
