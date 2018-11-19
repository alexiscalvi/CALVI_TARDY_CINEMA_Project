package com.epul.cinema.cinema_spring_boot.repositories;

import com.epul.cinema.cinema_spring_boot.domains.FilmActorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FilmActorEntityRepository extends JpaRepository<FilmActorEntity, Short> {
    @Query(" Select fa " +
            " from FilmActorEntity fa "+
            " where fa.filmId=:filmId"
    )
    List<FilmActorEntity> getActorsByFilmId(@Param("filmId") short filmId);
}
