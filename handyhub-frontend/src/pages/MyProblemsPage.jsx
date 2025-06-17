// src/pages/MyProblemsPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MyProblemsPage.css';
import ProblemService from '../services/problem.service'; // Import ProblemService

const MyProblemsPage = () => {
  const [myProblems, setMyProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMyProblems = async () => {
    setLoading(true);
    setError(null);
    try {
      // The backend currently returns all problems for /api/problems/my
      // In a real app, this would be filtered by user ID or session
      const response = await ProblemService.getMyProblems();
      const problemsWithStatus = response.data.map(p => ({ ...p, status: p.status || 'Pending' }));
      setMyProblems(problemsWithStatus.sort((a, b) => Number(b.id) - Number(a.id)));
    } catch (err) {
      console.error("Error loading my problems:", err);
      setError("Failed to load your tasks. Please ensure the backend is running.");
      setMyProblems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyProblems();
  }, []);

  const updateProblemStatusHandler = async (problemId, newStatus) => {
    try {
      const problemToUpdate = myProblems.find(p => p.id === problemId);
      if (!problemToUpdate) {
        alert("Problem not found locally.");
        return;
      }
      
      // Create a copy and update the status
      const updatedProblemData = { ...problemToUpdate, status: newStatus };

      await ProblemService.updateProblem(problemId, updatedProblemData);
      
      // Update local state after successful API call
      setMyProblems(prevProblems => 
        prevProblems.map(p => p.id === problemId ? { ...p, status: newStatus } : p)
      );
      alert(`Problem status updated to '${newStatus}'!`);
    } catch (err) {
      console.error("Error updating problem status:", err);
      setError("Failed to update status. Please try again.");
      alert("Failed to update status. Please try again.");
    }
  };

  const handleDeleteProblemHandler = async (problemId) => {
    if (window.confirm("Are you sure you want to delete this problem? This action cannot be undone.")) {
      try {
        await ProblemService.deleteProblem(problemId);
        
        // Update local state after successful API call
        setMyProblems(prevProblems => prevProblems.filter(p => p.id !== problemId));
        alert("Problem deleted successfully!");
      } catch (err) {
        console.error("Error deleting problem:", err);
        setError("Failed to delete problem. Please try again.");
        alert("Failed to delete problem. Please try again.");
      }
    }
  };

  if (loading) {
    return <div className="page-container my-problems-page"><p>Loading your problems...</p></div>;
  }
  if (error) {
    return <div className="page-container my-problems-page"><p className="error-message">{error}</p></div>;
  }

  return (
    <div className="page-container my-problems-page">
      <h1>My Posted Problems</h1>
      {myProblems.length === 0 ? (
        <div className="no-problems-message">
          <p>You haven't posted any problems yet. (Note: Currently displays all problems from backend)</p>
          <Link to="/post-problem" className="post-new-problem-button">
            Post Your First Problem
          </Link>
        </div>
      ) : (
        <div className="problem-list">
          {myProblems.map((problem) => (
            <div key={problem.id} className={`problem-card my-problem-card status-${problem.status ? problem.status.toLowerCase() : 'unknown'}`}>
              <h3>{problem.category}</h3>
              <p>{problem.description}</p>
              <p><strong>Location:</strong> {problem.location}</p>
              <p><strong>Contact:</strong> {problem.phone}</p>
              <p><small>Posted on: {problem.datePosted}</small></p>
              <p className="problem-status">
                <strong>Status:</strong> <span>{problem.status}</span>
              </p>
              <div className="problem-actions">
                {problem.status === 'Pending' && (
                  <button
                    className="status-button solved-button"
                    onClick={() => updateProblemStatusHandler(problem.id, 'Solved')}
                  > Mark as Solved </button>
                )}
                {problem.status === 'Solved' && (
                  <button
                    className="status-button pending-button"
                    onClick={() => updateProblemStatusHandler(problem.id, 'Pending')}
                  > Mark as Pending </button>
                )}
                <button
                    className="delete-button"
                    onClick={() => handleDeleteProblemHandler(problem.id)}
                > Delete </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProblemsPage;