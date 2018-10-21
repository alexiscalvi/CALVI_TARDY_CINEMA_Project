package com.epul.cinema_spring_boot.domains;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "realisateur", schema = "cinema", catalog = "")
public class RealisateurEntity {
    private Integer noRea;
    private String nomRea;
    private String prenRea;
    private Collection<FilmEntity> filmsByNoRea;

    @Id
    @Column(name = "NoRea", nullable = false)
    public Integer getNoRea() {
        return noRea;
    }

    public void setNoRea(Integer noRea) {
        this.noRea = noRea;
    }

    @Basic
    @Column(name = "NomRea", nullable = false, length = 20)
    public String getNomRea() {
        return nomRea;
    }

    public void setNomRea(String nomRea) {
        this.nomRea = nomRea;
    }

    @Basic
    @Column(name = "PrenRea", nullable = false, length = 20)
    public String getPrenRea() {
        return prenRea;
    }

    public void setPrenRea(String prenRea) {
        this.prenRea = prenRea;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RealisateurEntity that = (RealisateurEntity) o;
        return Objects.equals(noRea, that.noRea) &&
                Objects.equals(nomRea, that.nomRea) &&
                Objects.equals(prenRea, that.prenRea);
    }

    @Override
    public int hashCode() {

        return Objects.hash(noRea, nomRea, prenRea);
    }

    @OneToMany(mappedBy = "realisateurByNoRea")
    public Collection<FilmEntity> getFilmsByNoRea() {
        return filmsByNoRea;
    }

    public void setFilmsByNoRea(Collection<FilmEntity> filmsByNoRea) {
        this.filmsByNoRea = filmsByNoRea;
    }
}
