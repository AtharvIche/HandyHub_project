package com.handyhub.backend.repository;

import com.handyhub.backend.entity.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProblemRepository extends JpaRepository<Problem, Long> {
    // JpaRepository provides CRUD methods like findAll(), findById(), save(), deleteById()
    // You can add custom query methods here if needed later
    // For example: List<Problem> findByCategory(String category);
}