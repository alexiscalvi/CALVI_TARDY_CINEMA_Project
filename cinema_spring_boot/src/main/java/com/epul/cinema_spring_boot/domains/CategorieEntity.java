package com.epul.cinema_spring_boot.domains;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "categorie", schema = "cinema", catalog = "")
public class CategorieEntity {
    private String codeCat;
    private String libelleCat;
    private Collection<FilmEntity> filmsByCodeCat;

    @Id
    @Column(name = "CodeCat", nullable = false, length = 2)
    public String getCodeCat() {
        return codeCat;
    }

    public void setCodeCat(String codeCat) {
        this.codeCat = codeCat;
    }

    @Basic
    @Column(name = "LibelleCat", nullable = false, length = 20)
    public String getLibelleCat() {
        return libelleCat;
    }

    public void setLibelleCat(String libelleCat) {
        this.libelleCat = libelleCat;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CategorieEntity that = (CategorieEntity) o;
        return Objects.equals(codeCat, that.codeCat) &&
                Objects.equals(libelleCat, that.libelleCat);
    }

    @Override
    public int hashCode() {

        return Objects.hash(codeCat, libelleCat);
    }

    @OneToMany(mappedBy = "categorieByCodeCat")
    public Collection<FilmEntity> getFilmsByCodeCat() {
        return filmsByCodeCat;
    }

    public void setFilmsByCodeCat(Collection<FilmEntity> filmsByCodeCat) {
        this.filmsByCodeCat = filmsByCodeCat;
    }
}
