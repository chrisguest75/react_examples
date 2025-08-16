
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import Card from './Card';

import { afterEach } from 'vitest';
afterEach(() => {
  cleanup();
});

describe('Card', () => {
  it('renders count and buttons', () => {
    render(
      <Card count={5} loading={false} onIncrement={() => {}} onReset={() => {}} />
    );
    expect(screen.getByText('count is 5')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(
      <Card count={5} loading={true} onIncrement={() => {}} onReset={() => {}} />
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('calls onIncrement and onReset', () => {
    const onIncrement = vi.fn();
    const onReset = vi.fn();
    render(
      <Card count={5} loading={false} onIncrement={onIncrement} onReset={onReset} />
    );
  fireEvent.click(screen.getByText('count is 5'));
  expect(onIncrement).toHaveBeenCalled();
  fireEvent.click(screen.getByText('Reset'));
  expect(onReset).toHaveBeenCalled();
  });
});
