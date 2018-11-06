package com.epul.cinema.cinema_spring_boot.domains;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class FilmCategoryEntityPK implements Serializable {
    private Short filmId;
    private Byte categoryId;

    @Column(name = "film_id", nullable = false)
    @Id
    public Short getFilmId() {
        return filmId;
    }

    public void setFilmId(Short filmId) {
        this.filmId = filmId;
    }

    @Column(name = "category_id", nullable = false)
    @Id
    public Byte getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Byte categoryId) {
        this.categoryId = categoryId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FilmCategoryEntityPK that = (FilmCategoryEntityPK) o;
        return Objects.equals(filmId, that.filmId) &&
                Objects.equals(categoryId, that.categoryId);
    }

    @Override
    public int hashCode() {

        return Objects.hash(filmId, categoryId);
    }
}
