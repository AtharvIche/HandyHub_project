// handyhub-vite-frontend/src/services/problem.service.js

import axios from 'axios';

// --- CHANGE THIS LINE ---
// Get the base URL from environment variables using Vite's import.meta.env
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

const problemApi = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const ProblemService = {
    getAllProblems: () => problemApi.get('/problems'),
    getProblemById: (id) => problemApi.get(`/problems/${id}`),
    createProblem: (problemData) => problemApi.post('/problems', problemData),
    updateProblem: (id, problemData) => problemApi.put(`/problems/${id}`, problemData),
    deleteProblem: (id) => problemApi.delete(`/problems/${id}`),
    getMyProblems: () => problemApi.get('/problems/my'),
};

export default ProblemService;