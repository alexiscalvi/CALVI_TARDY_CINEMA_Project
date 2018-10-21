package com.epul.cinema_spring_boot.domains;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "personnage", schema = "cinema", catalog = "")
@IdClass(PersonnageEntityPK.class)
public class PersonnageEntity {
    private Integer noFilm;
    private Integer noAct;
    private String nomPers;
    private FilmEntity filmByNoFilm;
    private ActeurEntity acteurByNoAct;

    @Id
    @Column(name = "NoFilm", insertable=false, updatable=false, nullable = false)
    public Integer getNoFilm() {
        return noFilm;
    }

    public void setNoFilm(Integer noFilm) {
        this.noFilm = noFilm;
    }

    @Id
    @Column(name = "NoAct",insertable=false, updatable=false, nullable = false)
    public Integer getNoAct() {
        return noAct;
    }

    public void setNoAct(Integer noAct) {
        this.noAct = noAct;
    }

    @Basic
    @Column(name = "NomPers", nullable = false, length = 30)
    public String getNomPers() {
        return nomPers;
    }

    public void setNomPers(String nomPers) {
        this.nomPers = nomPers;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PersonnageEntity that = (PersonnageEntity) o;
        return Objects.equals(noFilm, that.noFilm) &&
                Objects.equals(noAct, that.noAct) &&
                Objects.equals(nomPers, that.nomPers);
    }

    @Override
    public int hashCode() {

        return Objects.hash(noFilm, noAct, nomPers);
    }

    @ManyToOne
    @JoinColumn(name = "NoFilm", referencedColumnName = "NoFilm", nullable = false)
    public FilmEntity getFilmByNoFilm() {
        return filmByNoFilm;
    }

    public void setFilmByNoFilm(FilmEntity filmByNoFilm) {
        this.filmByNoFilm = filmByNoFilm;
    }

    @ManyToOne
    @JoinColumn(name = "NoAct", referencedColumnName = "NoAct", nullable = false)
    public ActeurEntity getActeurByNoAct() {
        return acteurByNoAct;
    }

    public void setActeurByNoAct(ActeurEntity acteurByNoAct) {
        this.acteurByNoAct = acteurByNoAct;
    }
}
