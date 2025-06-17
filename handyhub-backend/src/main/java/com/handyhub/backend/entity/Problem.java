package com.handyhub.backend.entity;

import jakarta.persistence.*; // For Spring Boot 3+
// import javax.persistence.*; // For Spring Boot 2.x
import lombok.Data; // If using Lombok
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "problems")
@Data // Lombok: Generates getters, setters, toString, equals, hashCode
@NoArgsConstructor // Lombok: Generates no-args constructor
@AllArgsConstructor // Lombok: Generates all-args constructor
public class Problem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category;
    private String description;
    private String location;
    private String phone;
    private String datePosted; // Consider using LocalDate or Timestamp for better date handling
    private String status;     // e.g., "Pending", "Solved"

    // If not using Lombok, you'd manually add:
    // - No-argument constructor
    // - All-argument constructor (optional, but useful)
    // - Getters and setters for all fields
}