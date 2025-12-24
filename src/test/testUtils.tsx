import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

interface RenderOptions {
  route?: string;
}

export function renderWithProviders(ui: React.ReactElement, options: RenderOptions = {}) {
  const { route = '/' } = options;
  window.history.pushState({}, 'Test', route);

  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
    </HelmetProvider>
  );
}
