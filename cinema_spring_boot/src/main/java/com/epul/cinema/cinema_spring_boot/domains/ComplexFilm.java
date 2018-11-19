package com.epul.cinema.cinema_spring_boot.domains;

import java.util.ArrayList;
import java.util.List;

public class ComplexFilm {

    private FilmEntity filmEntity;
    private List<CategoryEntity> categoryEntityList;
    private List<ActorEntity> actorEntityList;

    public ComplexFilm() {
        this.filmEntity = new FilmEntity();
        this.categoryEntityList = new ArrayList<>();
        this.actorEntityList = new ArrayList<>();
    }

    public ComplexFilm(FilmEntity filmEntity, List<CategoryEntity> categoryEntityList, List<ActorEntity> actorEntityList) {
        this.filmEntity = filmEntity;
        this.categoryEntityList = categoryEntityList;
        this.actorEntityList = actorEntityList;
    }

    public FilmEntity getFilmEntity() {
        return filmEntity;
    }

    public void setFilmEntity(FilmEntity filmEntity) {
        this.filmEntity = filmEntity;
    }

    public List<CategoryEntity> getCategoryEntityList() {
        return categoryEntityList;
    }

    public void setCategoryEntityList(List<CategoryEntity> categoryEntityList) {
        this.categoryEntityList = categoryEntityList;
    }

    public List<ActorEntity> getActorEntityList() {
        return actorEntityList;
    }

    public void setActorEntityList(List<ActorEntity> actorEntityList) {
        this.actorEntityList = actorEntityList;
    }

    public void addActorEntity(ActorEntity actorEntity) {
        this.actorEntityList.add(actorEntity);
    }

    public void addCategoryEntity(CategoryEntity categoryEntity) {
        this.categoryEntityList.add(categoryEntity);
    }


}
