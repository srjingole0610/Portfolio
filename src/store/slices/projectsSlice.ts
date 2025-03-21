
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
      // githubUrl: 'https://github.com/srjingole0610',
      featured: false,
    },
    {
      id: '2',
      title: 'Omnifood Application',
      description: 'A static web application focusing on a healthy meal delivery service, created using HTML and CSS. The application offers food subscription services for daily meal deliveries.',
      technologies: ['HTML', 'CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80',
      liveUrl: 'https://omnifoods-main.netlify.app/',
      githubUrl: 'https://github.com/srjingole0610/Omnifood_Application/tree/Development',
      featured: true,
    },
    {
      id: '3',
      title: 'Food Recipe App',
      description: 'A React-based recipe search application that allows users to search for recipes and view detailed instructions. The app uses a food API to fetch and display recipes with ingredients and cooking steps.',
      technologies: ['React', 'JavaScript', 'API Integration', 'CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
      liveUrl: 'https://myf00dapp.netlify.app/',
      githubUrl: 'https://github.com/srjingole0610/FOODAPP/tree/Development',
      featured: true,
    },
    {
      id: '4',
      title: 'ToDo List Application',
      description: 'A responsive and intuitive todo list application built with React and Javascript that helps users organize their tasks. Features include adding, deleting, and marking tasks as complete.',
      technologies: ['React','JavaScript', 'HTML', 'CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      liveUrl: 'https://my2doolist.netlify.app/',
      githubUrl: 'https://github.com/srjingole0610/toDOList/tree/Development',
      featured: true,
    },
    {
      id: '5',
      title: 'Race To 100 Game',
      description: 'An interactive dice game built with vanilla JavaScript where players compete to reach 100 points. Players can roll the dice and accumulate points, with strategy elements for deciding when to hold.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      liveUrl: 'https://racetoo100.netlify.app/',
      githubUrl: 'https://github.com/srjingole0610/JavaScript/tree/PigGame',
      featured: false,
    },
    {
      id: '6',
      title: 'Guess The Number Game',
      description: 'A fun number guessing game where players try to guess a randomly generated number between 1 and 20. The game provides feedback to guide players to the correct answer while tracking high scores.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      imageUrl: '/images/pexels-fatihyurtman-17842693.jpg',
      liveUrl: 'https://guessdnumbergame.netlify.app/',
      githubUrl: 'https://github.com/srjingole0610/JavaScript/tree/GuessMyNumber',
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
