package com.epul.cinema.cinema_spring_boot.domains;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class FilmActorEntityPK implements Serializable {
    private Short actorId;
    private Short filmId;

    @Column(name = "actor_id", nullable = false)
    @Id
    public Short getActorId() {
        return actorId;
    }

    public void setActorId(Short actorId) {
        this.actorId = actorId;
    }

    @Column(name = "film_id", nullable = false)
    @Id
    public Short getFilmId() {
        return filmId;
    }

    public void setFilmId(Short filmId) {
        this.filmId = filmId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FilmActorEntityPK that = (FilmActorEntityPK) o;
        return Objects.equals(actorId, that.actorId) &&
                Objects.equals(filmId, that.filmId);
    }

    @Override
    public int hashCode() {

        return Objects.hash(actorId, filmId);
    }
}
