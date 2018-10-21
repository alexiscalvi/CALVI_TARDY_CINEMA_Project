package com.epul.cinema_spring_boot.domains;

import javax.persistence.*;
import java.sql.Date;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "acteur", schema = "cinema", catalog = "")
public class ActeurEntity {
    private Integer noAct;
    private String nomAct;
    private String prenAct;
    private Date dateNaiss;
    private Date dateDeces;
    private Collection<PersonnageEntity> personnagesByNoAct;

    @Id
    @Column(name = "NoAct", nullable = false)
    public Integer getNoAct() {
        return noAct;
    }

    public void setNoAct(Integer noAct) {
        this.noAct = noAct;
    }

    @Basic
    @Column(name = "NomAct", nullable = false, length = 20)
    public String getNomAct() {
        return nomAct;
    }

    public void setNomAct(String nomAct) {
        this.nomAct = nomAct;
    }

    @Basic
    @Column(name = "PrenAct", nullable = true, length = 20)
    public String getPrenAct() {
        return prenAct;
    }

    public void setPrenAct(String prenAct) {
        this.prenAct = prenAct;
    }

    @Basic
    @Column(name = "DateNaiss", nullable = true)
    public Date getDateNaiss() {
        return dateNaiss;
    }

    public void setDateNaiss(Date dateNaiss) {
        this.dateNaiss = dateNaiss;
    }

    @Basic
    @Column(name = "DateDeces", nullable = true)
    public Date getDateDeces() {
        return dateDeces;
    }

    public void setDateDeces(Date dateDeces) {
        this.dateDeces = dateDeces;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ActeurEntity that = (ActeurEntity) o;
        return Objects.equals(noAct, that.noAct) &&
                Objects.equals(nomAct, that.nomAct) &&
                Objects.equals(prenAct, that.prenAct) &&
                Objects.equals(dateNaiss, that.dateNaiss) &&
                Objects.equals(dateDeces, that.dateDeces);
    }

    @Override
    public int hashCode() {

        return Objects.hash(noAct, nomAct, prenAct, dateNaiss, dateDeces);
    }

    @OneToMany(mappedBy = "acteurByNoAct")
    public Collection<PersonnageEntity> getPersonnagesByNoAct() {
        return personnagesByNoAct;
    }

    public void setPersonnagesByNoAct(Collection<PersonnageEntity> personnagesByNoAct) {
        this.personnagesByNoAct = personnagesByNoAct;
    }
}
