package com.handyhub.backend.service;

import com.handyhub.backend.entity.Problem;
import com.handyhub.backend.repository.ProblemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate; // Import LocalDate
import java.util.List;
import java.util.Optional;

@Service
public class ProblemService {

    @Autowired
    private ProblemRepository problemRepository;

    public Problem createProblem(Problem problem) {
        // Ensure status is set to "Pending" if not provided by the frontend
        if (problem.getStatus() == null || problem.getStatus().isEmpty()) {
            problem.setStatus("Pending");
        }
        // Ensure datePosted is set to today's date if not provided by the frontend
        if (problem.getDatePosted() == null || problem.getDatePosted().isEmpty()) {
            problem.setDatePosted(LocalDate.now().toString());
        }
        return problemRepository.save(problem);
    }

    public List<Problem> getAllProblems() {
        return problemRepository.findAll();
    }

    public Optional<Problem> getProblemById(Long id) {
        return problemRepository.findById(id);
    }

    // General purpose update method: updates provided fields, keeps others
    public Problem updateFullProblem(Long id, Problem problemDetails) {
        Problem existingProblem = problemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Problem not found with id: " + id + " for update."));

        // Update fields only if they are not null in the incoming problemDetails
        if (problemDetails.getCategory() != null) {
            existingProblem.setCategory(problemDetails.getCategory());
        }
        if (problemDetails.getDescription() != null) {
            existingProblem.setDescription(problemDetails.getDescription());
        }
        if (problemDetails.getLocation() != null) {
            existingProblem.setLocation(problemDetails.getLocation());
        }
        if (problemDetails.getPhone() != null) {
            existingProblem.setPhone(problemDetails.getPhone());
        }
        // This is the key part for status update from frontend
        if (problemDetails.getStatus() != null) {
            existingProblem.setStatus(problemDetails.getStatus());
        }
        // datePosted usually isn't updated, but if it needs to be, handle carefully
        // if (problemDetails.getDatePosted() != null) {
        //     existingProblem.setDatePosted(problemDetails.getDatePosted());
        // }

        return problemRepository.save(existingProblem);
    }

    public void deleteProblem(Long id) {
        if (!problemRepository.existsById(id)) {
            throw new RuntimeException("Problem not found with id: " + id + " for deletion.");
        }
        problemRepository.deleteById(id);
    }
}