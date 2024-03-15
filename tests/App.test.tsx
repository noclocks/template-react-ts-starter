import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from '../src/App';

describe('App', () => {
  describe('Rendering', () => {
    it('Shouold render without throwing', () => {
      render(<WrappedApp />);
      expect(screen.getByText('Hello World')).toBeInTheDocument();
    });
    it('Renders hello world', () => {
      render(<WrappedApp />);
      expect(
        screen.getByRole('heading', {
          level: 1,
        })
      ).toHaveTextContent('Hello World');
    });
    it('Renders not found if invalid path', () => {
      render(
        <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
          <App />
        </MemoryRouter>
      );
      expect(
        screen.getByRole('heading', {
          level: 1,
        })
      ).toHaveTextContent('Not Found');
    });
  });
});
