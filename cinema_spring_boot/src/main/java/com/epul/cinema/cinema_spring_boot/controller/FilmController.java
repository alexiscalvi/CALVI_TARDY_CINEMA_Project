package com.epul.cinema.cinema_spring_boot.controller;

import com.epul.cinema.cinema_spring_boot.domains.FilmEntity;
import com.epul.cinema.cinema_spring_boot.repositories.FilmEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/Film")
public class FilmController {

    @Autowired
    private FilmEntityRepository filmEntityRepository;

    @GetMapping("/getFilms")
    public List<FilmEntity> findAllFilms(){
        String destinationPage = "";
        List<FilmEntity> mesFilms = null;
        try {
            mesFilms = filmEntityRepository.findAll();
        } catch (Exception e) {

            ResponseEntity.notFound().build();
        }
        return mesFilms;
    }

}
