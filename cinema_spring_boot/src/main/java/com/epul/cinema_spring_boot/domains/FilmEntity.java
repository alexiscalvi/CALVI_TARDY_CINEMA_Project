package com.epul.cinema_spring_boot.domains;

import javax.persistence.*;
import java.sql.Date;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "film", schema = "cinema", catalog = "")
public class FilmEntity {
    private Integer noFilm;
    private String titre;
    private Integer duree;
    private Date dateSortie;
    private Integer budget;
    private Integer montantRecette;
    private Integer noRea;
    private String codeCat;
    private RealisateurEntity realisateurByNoRea;
    private CategorieEntity categorieByCodeCat;
    private Collection<PersonnageEntity> personnagesByNoFilm;

    @Id
    @Column(name = "NoFilm", nullable = false)
    public Integer getNoFilm() {
        return noFilm;
    }

    public void setNoFilm(Integer noFilm) {
        this.noFilm = noFilm;
    }

    @Basic
    @Column(name = "Titre", nullable = false, length = 30)
    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    @Basic
    @Column(name = "Duree", nullable = false)
    public Integer getDuree() {
        return duree;
    }

    public void setDuree(Integer duree) {
        this.duree = duree;
    }

    @Basic
    @Column(name = "DateSortie", nullable = false)
    public Date getDateSortie() {
        return dateSortie;
    }

    public void setDateSortie(Date dateSortie) {
        this.dateSortie = dateSortie;
    }

    @Basic
    @Column(name = "Budget", nullable = false)
    public Integer getBudget() {
        return budget;
    }

    public void setBudget(Integer budget) {
        this.budget = budget;
    }

    @Basic
    @Column(name = "MontantRecette", nullable = false)
    public Integer getMontantRecette() {
        return montantRecette;
    }

    public void setMontantRecette(Integer montantRecette) {
        this.montantRecette = montantRecette;
    }

    @Basic
    @Column(name = "NoRea",insertable=false, updatable=false, nullable = false)
    public Integer getNoRea() {
        return noRea;
    }

    public void setNoRea(Integer noRea) {
        this.noRea = noRea;
    }

    @Basic
    @Column(name = "CodeCat", insertable=false, updatable=false, nullable = false, length = 2)
    public String getCodeCat() {
        return codeCat;
    }

    public void setCodeCat(String codeCat) {
        this.codeCat = codeCat;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FilmEntity that = (FilmEntity) o;
        return Objects.equals(noFilm, that.noFilm) &&
                Objects.equals(titre, that.titre) &&
                Objects.equals(duree, that.duree) &&
                Objects.equals(dateSortie, that.dateSortie) &&
                Objects.equals(budget, that.budget) &&
                Objects.equals(montantRecette, that.montantRecette) &&
                Objects.equals(noRea, that.noRea) &&
                Objects.equals(codeCat, that.codeCat);
    }

    @Override
    public int hashCode() {

        return Objects.hash(noFilm, titre, duree, dateSortie, budget, montantRecette, noRea, codeCat);
    }

    @ManyToOne
    @JoinColumn(name = "NoRea", referencedColumnName = "NoRea", nullable = false)
    public RealisateurEntity getRealisateurByNoRea() {
        return realisateurByNoRea;
    }

    public void setRealisateurByNoRea(RealisateurEntity realisateurByNoRea) {
        this.realisateurByNoRea = realisateurByNoRea;
    }

    @ManyToOne
    @JoinColumn(name = "CodeCat", referencedColumnName = "CodeCat", nullable = false)
    public CategorieEntity getCategorieByCodeCat() {
        return categorieByCodeCat;
    }

    public void setCategorieByCodeCat(CategorieEntity categorieByCodeCat) {
        this.categorieByCodeCat = categorieByCodeCat;
    }

    @OneToMany(mappedBy = "filmByNoFilm")
    public Collection<PersonnageEntity> getPersonnagesByNoFilm() {
        return personnagesByNoFilm;
    }

    public void setPersonnagesByNoFilm(Collection<PersonnageEntity> personnagesByNoFilm) {
        this.personnagesByNoFilm = personnagesByNoFilm;
    }
}
