package com.epul.cinema.cinema_spring_boot.controller;

import com.epul.cinema.cinema_spring_boot.domains.CategoryEntity;
import com.epul.cinema.cinema_spring_boot.repositories.CategoryEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/Category")
public class CategoryController {
    @Autowired
    private CategoryEntityRepository categoryEntityRepository;

    @GetMapping("/getCategories")
    public List<CategoryEntity> findAllCategories() {
        String destinationPage = "";
        List<CategoryEntity> mesCategories = null;
        try {
            mesCategories = categoryEntityRepository.findAll();
        } catch (Exception e) {

            ResponseEntity.notFound().build();
        }
        return mesCategories;
    }
}
