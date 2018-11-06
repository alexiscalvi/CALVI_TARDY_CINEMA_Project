package com.epul.cinema.cinema_spring_boot.domains;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "film_text", schema = "cinema", catalog = "")
public class FilmTextEntity {
    private Short filmId;
    private String title;
    private String description;

    @Id
    @Column(name = "film_id", nullable = false)
    public Short getFilmId() {
        return filmId;
    }

    public void setFilmId(Short filmId) {
        this.filmId = filmId;
    }

    @Basic
    @Column(name = "title", nullable = false, length = 255)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Basic
    @Column(name = "description", nullable = true, length = -1)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FilmTextEntity that = (FilmTextEntity) o;
        return Objects.equals(filmId, that.filmId) &&
                Objects.equals(title, that.title) &&
                Objects.equals(description, that.description);
    }

    @Override
    public int hashCode() {

        return Objects.hash(filmId, title, description);
    }
}
