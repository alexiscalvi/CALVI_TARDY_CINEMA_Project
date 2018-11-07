package com.epul.cinema.cinema_spring_boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class CinemaSpringBootApplication extends SpringBootServletInitializer {
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(CinemaSpringBootApplication.class);
	}
	public static void main(String[] args) {
		SpringApplication.run(CinemaSpringBootApplication.class, args);
	}
}
