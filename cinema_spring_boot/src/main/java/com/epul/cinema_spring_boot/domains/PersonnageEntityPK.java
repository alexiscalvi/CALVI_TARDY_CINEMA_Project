package com.epul.cinema_spring_boot.domains;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class PersonnageEntityPK implements Serializable {
    private Integer noFilm;
    private Integer noAct;

    @Column(name = "NoFilm", insertable=false, updatable=false, nullable = false)
    @Id
    public Integer getNoFilm() {
        return noFilm;
    }

    public void setNoFilm(Integer noFilm) {
        this.noFilm = noFilm;
    }

    @Column(name = "NoAct", insertable=false, updatable=false, nullable = false)
    @Id
    public Integer getNoAct() {
        return noAct;
    }

    public void setNoAct(Integer noAct) {
        this.noAct = noAct;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PersonnageEntityPK that = (PersonnageEntityPK) o;
        return Objects.equals(noFilm, that.noFilm) &&
                Objects.equals(noAct, that.noAct);
    }

    @Override
    public int hashCode() {

        return Objects.hash(noFilm, noAct);
    }
}
