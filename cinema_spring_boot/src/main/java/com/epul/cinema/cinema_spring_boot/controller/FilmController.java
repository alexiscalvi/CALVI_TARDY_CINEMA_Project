package com.epul.cinema.cinema_spring_boot.controller;

import com.epul.cinema.cinema_spring_boot.domains.FilmEntity;
import com.epul.cinema.cinema_spring_boot.repositories.FilmEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/getFilm/{id}")
    public FilmEntity getFilmById(@PathVariable(value = "id") int filmId){
        System.out.println("ici" + filmId);
        String destinationPage = "";
        FilmEntity film = null;
        try {
            film = (FilmEntity) filmEntityRepository.findFilmById((short) filmId);
        } catch (Exception e) {
            System.out.println("ERROR:" + e.getMessage());
            ResponseEntity.notFound().build();
        }
        return film;
    }

}
