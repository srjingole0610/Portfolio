
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import themeReducer from '@/store/slices/themeSlice';
import projectsReducer from '@/store/slices/projectsSlice';
import type { RootState } from '@/store';

// Create a custom renderer that includes providers
const customRender = (
  ui: ReactElement,
  {
    preloadedState = {} as Partial<RootState>,
    store = configureStore({
      reducer: {
        theme: themeReducer,
        projects: projectsReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: {
    preloadedState?: Partial<RootState>;
    store?: ReturnType<typeof configureStore>;
    renderOptions?: Omit<RenderOptions, 'wrapper'>;
  } = {}
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };
  
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

// Re-export everything from testing-library
export * from '@testing-library/react';

// Override the render method
export { customRender as render };
