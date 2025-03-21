
import { describe, it, expect } from 'vitest';
import projectsReducer, { 
  selectProject, 
  clearSelectedProject,
  setLoading,
  setError
} from '../projectsSlice';
import { Project } from '../projectsSlice';

describe('projects reducer', () => {
  const mockProjects: Project[] = [
    {
      id: '1',
      title: 'Test Project 1',
      description: 'Test description 1',
      technologies: ['React', 'TypeScript'],
      imageUrl: 'test.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Test Project 2',
      description: 'Test description 2',
      technologies: ['Node.js', 'Express'],
      imageUrl: 'test2.jpg',
      featured: false
    }
  ];

  const initialState = {
    projects: mockProjects,
    selectedProject: null,
    loading: false,
    error: null
  };

  it('should handle initial state', () => {
    expect(projectsReducer(undefined, { type: 'unknown' })).toMatchObject({
      selectedProject: null,
      loading: false,
      error: null
    });
  });

  it('should handle selectProject', () => {
    const actual = projectsReducer(initialState, selectProject('1'));
    expect(actual.selectedProject).toEqual(mockProjects[0]);
  });

  it('should handle clearSelectedProject', () => {
    // First set a selected project
    const withSelectedProject = projectsReducer(initialState, selectProject('1'));
    
    // Then clear it
    const actual = projectsReducer(withSelectedProject, clearSelectedProject());
    expect(actual.selectedProject).toBeNull();
  });

  it('should handle setLoading', () => {
    const actual = projectsReducer(initialState, setLoading(true));
    expect(actual.loading).toEqual(true);
  });

  it('should handle setError', () => {
    const errorMessage = 'Something went wrong';
    const actual = projectsReducer(initialState, setError(errorMessage));
    expect(actual.error).toEqual(errorMessage);
    
    // Test clearing the error
    const cleared = projectsReducer(actual, setError(null));
    expect(cleared.error).toBeNull();
  });
});
