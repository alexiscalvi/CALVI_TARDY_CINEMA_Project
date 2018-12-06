package com.epul.cinema.cinema_spring_boot.controller;

import com.epul.cinema.cinema_spring_boot.Language;
import com.epul.cinema.cinema_spring_boot.domains.*;
import com.epul.cinema.cinema_spring_boot.domains.LanguageEntity;
import com.epul.cinema.cinema_spring_boot.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.sql.Timestamp;
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

    @Autowired
    private LanguageEntityRepository languageEntityRepository;

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
        List<FilmCategoryEntity> filmCategoryEntityList = null;
        List<FilmActorEntity> filmActorEntityList = null;
        try {
            mesFilms = filmEntityRepository.findAll();
            for (FilmEntity f: mesFilms) {
                ComplexFilm complexFilm = new ComplexFilm();
                complexFilm.setFilmEntity(f);

                filmCategoryEntityList = filmCategoryEntityRepository.getFilmCategoriesByFilmId(f.getFilmId());
                for (FilmCategoryEntity fc :
                        filmCategoryEntityList) {
                    complexFilm.addCategoryEntity(categoryEntityRepository.getOne(fc.getCategoryId()));
                }

                filmActorEntityList = filmActorEntityRepository.getActorsByFilmId(f.getFilmId());
                for (FilmActorEntity fa :
                        filmActorEntityList) {
                    complexFilm.addActorEntity(actorEntityRepository.getOne(fa.getActorId()));
                }

                LanguageEntity languageEntity = languageEntityRepository.getOne(f.getLanguageId());

                Language language = new Language(languageEntity.getLanguageId(),languageEntity.getName(),languageEntity.getLastUpdate());
                complexFilm.setLanguageNormal(language);

//                if( f.getOriginalLanguageId() != null) {
                    LanguageEntity languageVOEntity = languageEntityRepository.getOne(f.getOriginalLanguageId());

                    Language languageVO = new Language(languageVOEntity.getLanguageId(), languageVOEntity.getName(), languageVOEntity.getLastUpdate());
                    complexFilm.setLanguageVO(languageVO);
//                }

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

            List<FilmCategoryEntity> filmCategoryEntityList = filmCategoryEntityRepository.getFilmCategoriesByFilmId(f.getFilmId());
            for (FilmCategoryEntity fc :
                    filmCategoryEntityList) {
                complexFilm.addCategoryEntity(categoryEntityRepository.getOne(fc.getCategoryId()));
            }

            List<FilmActorEntity> filmActorEntityList = filmActorEntityRepository.getActorsByFilmId(f.getFilmId());
            for (FilmActorEntity fa :
                    filmActorEntityList) {
                complexFilm.addActorEntity(actorEntityRepository.getOne(fa.getActorId()));
            }

            LanguageEntity languageEntity = languageEntityRepository.getOne(f.getLanguageId());

            Language language = new Language(languageEntity.getLanguageId(),languageEntity.getName(),languageEntity.getLastUpdate());
            complexFilm.setLanguageNormal(language);


            LanguageEntity languageVOEntity = languageEntityRepository.getOne(f.getOriginalLanguageId());

            Language languageVO = new Language(languageVOEntity.getLanguageId(),languageVOEntity.getName(),languageVOEntity.getLastUpdate());
            complexFilm.setLanguageVO(languageVO);
        } catch (Exception e) {
            System.out.println("ERROR:" + e.getMessage());
            ResponseEntity.notFound().build();
        }
        return complexFilm;
    }

    @GetMapping("/removeComplexFilm/{id}")
    public void removeComplexFilm(@PathVariable(value = "id") short filmId){
        String destinationPage = "";
        FilmEntity f = this.filmEntityRepository.getOne(filmId);
        List<FilmCategoryEntity> filmCategoryEntities = this.filmCategoryEntityRepository.getFilmCategoriesByFilmId((short) filmId);
        List<FilmActorEntity> filmActorEntities = this.filmActorEntityRepository.getActorsByFilmId((short) filmId);
        try {
            this.filmActorEntityRepository.deleteAll(filmActorEntities);
            this.filmCategoryEntityRepository.deleteAll(filmCategoryEntities);
            this.filmEntityRepository.delete(f);
        } catch (Exception e) {
            System.out.println("ERROR:" + e.getMessage());
            ResponseEntity.notFound().build();
        }
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

                List<FilmCategoryEntity> filmCategoryEntityList2 = filmCategoryEntityRepository.getFilmCategoriesByFilmId(f.getFilmId());
                for (FilmCategoryEntity fc :
                        filmCategoryEntityList2) {
                    complexFilm.addCategoryEntity(categoryEntityRepository.getOne(fc.getCategoryId()));
                }

                filmActorEntityList = filmActorEntityRepository.getActorsByFilmId(f.getFilmId());
                for (FilmActorEntity fa :
                        filmActorEntityList) {
                    complexFilm.addActorEntity(actorEntityRepository.getOne(fa.getActorId()));
                }

                LanguageEntity languageEntity = languageEntityRepository.getOne(f.getLanguageId());
                Language language = new Language(languageEntity.getLanguageId(),languageEntity.getName(),languageEntity.getLastUpdate());
                complexFilm.setLanguageNormal(language);

                LanguageEntity languageVOEntity = languageEntityRepository.getOne(f.getOriginalLanguageId());
                Language languageVO = new Language(languageVOEntity.getLanguageId(),languageVOEntity.getName(),languageVOEntity.getLastUpdate());
                complexFilm.setLanguageVO(languageVO);

                complexFilmList.add(complexFilm);
            }
        } catch (Exception e) {

            System.out.println(e);
            ResponseEntity.notFound().build();
        }
        return complexFilmList;
    }

    @PostMapping("/addComplexFilm")
    public void addComplexFilm(  @Valid @RequestBody ComplexFilm complexFilm){
        String destinationPage = "";
        try {
            FilmEntity filmEntity = new FilmEntity();
            List<CategoryEntity> categoryEntityList = new ArrayList<>();
            List<ActorEntity> actorEntityList = new ArrayList<>();
            FilmCategoryEntity filmCategoryEntity = new FilmCategoryEntity();
            FilmActorEntity filmActorEntity = new FilmActorEntity();

            filmEntity = complexFilm.getFilmEntity();
//            System.out.println("filmId:" + filmEntity.getFilmId());
//            System.out.println("title:" + filmEntity.getTitle());
//            System.out.println("languageId:" + filmEntity.getLanguageId());
//            System.out.println("languageId:" + filmEntity.getOriginalLanguageId());
//            System.out.println("lentg:" + filmEntity.getLength());
            filmEntity.setRating("G");
            filmEntity.setRentalDuration((byte) 0);
            filmEntity.setRentalRate(BigDecimal.valueOf(0));
            filmEntity.setReplacementCost(BigDecimal.valueOf(0));
//            System.out.println("rating:" + filmEntity.getRating());
            filmEntityRepository.save(filmEntity);
            filmEntityRepository.flush();
//            System.out.println("filmId:" + filmEntity.getFilmId());

            actorEntityList = complexFilm.getActorEntityList();
            categoryEntityList = complexFilm.getCategoryEntityList();

            filmActorEntity.setFilmId(complexFilm.getFilmEntity().getFilmId());
            for (ActorEntity actor :
                    actorEntityList) {
//                System.out.println("actorNom" + actor.getFirstName());
//                System.out.println("actorNom" + actor.getActorId());
                filmActorEntity.setActorId(actor.getActorId());
                filmActorEntityRepository.save(filmActorEntity);
                filmActorEntityRepository.flush();
            }

            filmCategoryEntity.setFilmId(complexFilm.getFilmEntity().getFilmId());
            for (CategoryEntity category :
                    categoryEntityList) {
//                System.out.println("categoryName" + filmCategoryEntity.getFilmId());
//                System.out.println("categoryName" + category.getName());
//                System.out.println("categoryName" + category.getCategoryId());
                filmCategoryEntity.setCategoryId(category.getCategoryId());
//                System.out.println("categoryName" + filmCategoryEntity.getCategoryId());
                filmCategoryEntityRepository.save(filmCategoryEntity);
                filmCategoryEntityRepository.flush();
            }

        } catch (Exception e) {
            System.out.println(e);
            System.out.println(e.getMessage());
            ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/updateComplexFilm")
    public void updateComplexFilm(  @Valid @RequestBody ComplexFilm complexFilm){
        String destinationPage = "";
        try {
            this.filmEntityRepository.save(complexFilm.getFilmEntity());
            this.filmEntityRepository.flush();

            this.filmActorEntityRepository.deleteByFilmId(complexFilm.getFilmEntity().getFilmId());
            this.filmActorEntityRepository.flush();

            FilmActorEntity filmActorEntity = new FilmActorEntity();
            filmActorEntity.setFilmId(complexFilm.getFilmEntity().getFilmId());
            for (ActorEntity actorEntity :
                    complexFilm.getActorEntityList()) {
                filmActorEntity.setActorId(actorEntity.getActorId());
                this.filmActorEntityRepository.save(filmActorEntity);
                this.filmActorEntityRepository.flush();
            }

            this.filmCategoryEntityRepository.deleteByFilmId(complexFilm.getFilmEntity().getFilmId());
            this.filmCategoryEntityRepository.flush();

            FilmCategoryEntity filmCategoryEntity = new FilmCategoryEntity();
            filmCategoryEntity.setFilmId(complexFilm.getFilmEntity().getFilmId());
            for (CategoryEntity categoryEntity :
                    complexFilm.getCategoryEntityList()) {
                filmCategoryEntity.setCategoryId(categoryEntity.getCategoryId());
                this.filmCategoryEntityRepository.save(filmCategoryEntity);
                this.filmCategoryEntityRepository.flush();
            }
        } catch (Exception e) {
            System.out.println(e);
            System.out.println(e.getMessage());
            ResponseEntity.notFound().build();
        }
    }

}
