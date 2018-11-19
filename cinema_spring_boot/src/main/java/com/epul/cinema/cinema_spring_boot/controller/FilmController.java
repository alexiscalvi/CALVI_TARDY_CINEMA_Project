package com.epul.cinema.cinema_spring_boot.controller;

import com.epul.cinema.cinema_spring_boot.domains.*;
import com.epul.cinema.cinema_spring_boot.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin
@RequestMapping("/Film")
public class FilmController {

    @Autowired
    private FilmEntityRepository filmEntityRepository;

    @Autowired
    private FilmCategoryEntityRepository filmCategoryEntityRepository;

    @Autowired
    private FilmActorEntityRepository filmActorEntityRepository;

    @Autowired
    private CategoryEntityRepository categoryEntityRepository;

    @Autowired
    private ActorEntityRepository actorEntityRepository;

    public FilmController() {
    }

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

    @GetMapping("/getComplexFilms")
    public List<ComplexFilm> findAllComplexFilms(){
        String destinationPage = "";
        List<FilmEntity> mesFilms = null;
        List<ComplexFilm> complexFilmList = new ArrayList<>();
        FilmCategoryEntity filmCategoryEntity = null;
        List<FilmActorEntity> filmActorEntityList = null;
        try {
            mesFilms = filmEntityRepository.findAll();
            for (FilmEntity f: mesFilms) {
                ComplexFilm complexFilm = new ComplexFilm();
                complexFilm.setFilmEntity(f);

                filmCategoryEntity = filmCategoryEntityRepository.getFilmCategoriesByFilmId(f.getFilmId());
                complexFilm.addCategoryEntity(categoryEntityRepository.getOne(filmCategoryEntity.getCategoryId()));

                filmActorEntityList = filmActorEntityRepository.getActorsByFilmId(f.getFilmId());
                for (FilmActorEntity fa :
                        filmActorEntityList) {
                    complexFilm.addActorEntity(actorEntityRepository.getOne(fa.getActorId()));
                }
                complexFilmList.add(complexFilm);
            }
        } catch (Exception e) {

            System.out.println(e);
            ResponseEntity.notFound().build();
        }
        return complexFilmList;
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

    @GetMapping("/getComplexFilm/{id}")
    public ComplexFilm getComplexFilmById(@PathVariable(value = "id") int filmId){
        String destinationPage = "";
        ComplexFilm complexFilm = new ComplexFilm();
        FilmEntity f;
        try {
            f = (FilmEntity) filmEntityRepository.findFilmById((short) filmId);
            complexFilm.setFilmEntity(f);

            FilmCategoryEntity filmCategoryEntity = filmCategoryEntityRepository.getFilmCategoriesByFilmId(f.getFilmId());
            complexFilm.addCategoryEntity(categoryEntityRepository.getOne(filmCategoryEntity.getCategoryId()));

            List<FilmActorEntity> filmActorEntityList = filmActorEntityRepository.getActorsByFilmId(f.getFilmId());
            for (FilmActorEntity fa :
                    filmActorEntityList) {
                complexFilm.addActorEntity(actorEntityRepository.getOne(fa.getActorId()));
            }
        } catch (Exception e) {
            System.out.println("ERROR:" + e.getMessage());
            ResponseEntity.notFound().build();
        }
        return complexFilm;
    }

    @GetMapping("/getComplexFilmsByCategory/{id}")
    public List<ComplexFilm> getComplexFilmsByCategory(@PathVariable(value = "id") Byte categoryId){
        String destinationPage = "";
        List<FilmEntity> filmEntityList = new ArrayList<>();
        List<ComplexFilm> complexFilmList = new ArrayList<>();
        List<FilmCategoryEntity> filmCategoryEntityList;
        List<FilmActorEntity> filmActorEntityList;
        try {
                filmCategoryEntityList = filmCategoryEntityRepository.getFilmCategoriesByCategoryId(categoryId);
            for (FilmCategoryEntity fc :
                    filmCategoryEntityList) {
                filmEntityList.add((FilmEntity) filmEntityRepository.findFilmById(fc.getFilmId()));
            }
            for (FilmEntity f: filmEntityList) {
                ComplexFilm complexFilm = new ComplexFilm();
                complexFilm.setFilmEntity(f);

                FilmCategoryEntity filmCategoryEntity = filmCategoryEntityRepository.getFilmCategoriesByFilmId(f.getFilmId());
                complexFilm.addCategoryEntity(categoryEntityRepository.getOne(filmCategoryEntity.getCategoryId()));

                filmActorEntityList = filmActorEntityRepository.getActorsByFilmId(f.getFilmId());
                for (FilmActorEntity fa :
                        filmActorEntityList) {
                    complexFilm.addActorEntity(actorEntityRepository.getOne(fa.getActorId()));
                }
                complexFilmList.add(complexFilm);
            }
        } catch (Exception e) {

            System.out.println(e);
            ResponseEntity.notFound().build();
        }
        return complexFilmList;
    }

}
