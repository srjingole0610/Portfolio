
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';
import { MemoryRouter } from 'react-router-dom';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

describe('Hero Component', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    
    // Check if important elements are rendered
    expect(screen.getByText('Creating beautiful digital experiences')).toBeInTheDocument();
    expect(screen.getByText(/I design and build applications/)).toBeInTheDocument();
    
    // Check for the call-to-action buttons
    expect(screen.getByText('View My Work')).toBeInTheDocument();
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });
  
  it('has correct links', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    
    // Check if the buttons link to the correct pages
    const viewWorkButton = screen.getByText('View My Work').closest('a');
    const contactButton = screen.getByText('Get In Touch').closest('a');
    
    expect(viewWorkButton).toHaveAttribute('href', '/projects');
    expect(contactButton).toHaveAttribute('href', '/contact');
  });
});
