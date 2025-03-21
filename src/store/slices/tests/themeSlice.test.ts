
import { describe, it, expect } from 'vitest';
import themeReducer, { toggleTheme, setDarkMode } from '../themeSlice';

describe('theme reducer', () => {
  const initialState = {
    isDarkMode: false,
  };

  it('should handle initial state', () => {
    expect(themeReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle toggleTheme', () => {
    const actual = themeReducer(initialState, toggleTheme());
    expect(actual.isDarkMode).toEqual(true);
    
    // Toggle again should set it back to false
    const toggled = themeReducer(actual, toggleTheme());
    expect(toggled.isDarkMode).toEqual(false);
  });

  it('should handle setDarkMode', () => {
    const actual = themeReducer(initialState, setDarkMode(true));
    expect(actual.isDarkMode).toEqual(true);
    
    // Setting to false should work too
    const updated = themeReducer(actual, setDarkMode(false));
    expect(updated.isDarkMode).toEqual(false);
  });
});
