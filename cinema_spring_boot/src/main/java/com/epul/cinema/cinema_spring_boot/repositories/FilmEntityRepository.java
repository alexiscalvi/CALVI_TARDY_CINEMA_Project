package com.epul.cinema.cinema_spring_boot.repositories;

import com.epul.cinema.cinema_spring_boot.domains.FilmEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FilmEntityRepository extends JpaRepository<FilmEntity, Integer> {
    @Query("Select f" +
            " from FilmEntity f" +
            " where  f.filmId= :filmId"
    )
    Object findFilmById(@Param("filmId") short filmId);

//    @Query("SELECT film.filmId AS FID, " +
//            "        film.title AS title, " +
//            "        film.description AS description, " +
//            "        film.rental_rate AS price," +
//            "        film.length AS length, " +
//            "        film.rating AS rating, " +
//            "        actors," +
//            "        GROUP_CONCAT(CONCAT(c.categoryId, _utf8' ',c.name, _utf8' ', c.last_update) SEPARATOR ',') as categories " +
//            "FROM FilmEntity film LEFT JOIN FilmCategoryEntity fc ON film.filmId = fc.filmId " +
//            "        JOIN CategoryEntity c ON c.categoryId = fc.categoryId" +
//            "        LEFT JOIN (" +
//            "                SELECT film.filmId," +
//            "                        GROUP_CONCAT(CONCAT(actor.actorId, _utf8' ',actor.first_name, _utf8' ', actor.last_name, _utf8' ',actor.last_update) SEPARATOR ',') AS actors" +
//            "                        FROM FilmEntity film " +
//            "                        JOIN FilmActorEntity fa ON film.filmId = fa.filmId" +
//            "                        JOIN ActorEntity actor ON fa.actorId = actor.actorId" +
//            "                        GROUP BY film.filmId ) as actors ON actors.FID = film.filmId" +
//            "        GROUP BY film.filmId"
//    )
//    List<Object> findAllComplexFilms();

    @Query("Select f, c,a" +
            " from CategoryEntity c " +
            "left join FilmCategoryEntity fc ON c.categoryId = fc.categoryId " +
            "left join FilmEntity f ON fc.filmId = f.filmId" +
            " join FilmActorEntity fa ON f.filmId = fa.filmId " +
            " JOIN ActorEntity a ON fa.actorId = a.actorId " +
            "group by f.filmId"

    )
    List<Object> findComplexFilmById(@Param("filmId") short filmId);
}
