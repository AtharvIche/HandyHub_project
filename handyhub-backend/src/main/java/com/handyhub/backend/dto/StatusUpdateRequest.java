package com.handyhub.backend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class StatusUpdateRequest {
    private String status;
    // You could add other fields here if this DTO becomes more general
}