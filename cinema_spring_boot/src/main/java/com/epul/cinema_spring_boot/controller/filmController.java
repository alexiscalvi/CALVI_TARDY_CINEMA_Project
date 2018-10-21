package com.epul.cinema_spring_boot.controller;

import com.epul.cinema_spring_boot.domains.FilmEntity;
import com.epul.cinema_spring_boot.repositories.EntityFilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/Films")
public class filmController {
    @Autowired
    private EntityFilmRepository entityFilmRepository;

    @GetMapping("/getFilms")
    public List<FilmEntity> findAllFilms() {
        String destinationPage = "";
        List<FilmEntity> mesClients = null;
        try {
            mesClients = entityFilmRepository.findAll();
        } catch (Exception e) {

            ResponseEntity.notFound().build();
        }
        return mesClients;

    }
}
