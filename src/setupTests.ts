
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Automatically run cleanup after each test
afterEach(() => {
  cleanup();
});
