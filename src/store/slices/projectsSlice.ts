
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the Project
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

interface ProjectsState {
  projects: Project[];
  selectedProject: Project | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProjectsState = {
  projects: [
    {
      id: '1',
      title: 'FRH Reconciliation',
      description: 'A custom-built Node.js application that provides real-time reconciliation data for clients in the banking and finance domain, handling large volumes of financial data with high accuracy and performance.',
      technologies: ['JavaScript', 'Angular', 'Node.js', 'Express.js', 'MongoDB'],
      imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      id: '2',
      title: 'Omnifood Application',
      description: 'A static web application focusing on a healthy meal delivery service, created using HTML and CSS. The application offers food subscription services for daily meal deliveries.',
      technologies: ['HTML', 'CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      id: '3',
      title: 'E-commerce Platform',
      description: 'A comprehensive e-commerce solution with product management, cart functionality, and payment processing developed using the MERN stack.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      githubUrl: 'https://github.com',
      featured: false,
    },
    {
      id: '4',
      title: 'Financial Dashboard',
      description: 'A dynamic financial dashboard built with Angular and .NET Core, providing real-time data visualization and financial reporting for enterprise clients.',
      technologies: ['Angular', 'C#', '.NET Core', 'SQL'],
      imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      githubUrl: 'https://github.com',
      featured: false,
    },
  ],
  selectedProject: null,
  loading: false,
  error: null,
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
    selectProject: (state, action: PayloadAction<string>) => {
      state.selectedProject = state.projects.find(p => p.id === action.payload) || null;
    },
    clearSelectedProject: (state) => {
      state.selectedProject = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { 
  setProjects, 
  selectProject, 
  clearSelectedProject,
  setLoading,
  setError
} = projectsSlice.actions;

export default projectsSlice.reducer;
