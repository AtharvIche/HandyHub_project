package com.handyhub.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan; // Import

@SpringBootApplication
@ComponentScan(basePackages = {"com.handyhub.backend", "com.handyhub.backend.config"}) // Add your config package
public class HandyhubBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(HandyhubBackendApplication.class, args);
	}
}