package com.epul.cinema_spring_boot.repositories;

import com.epul.cinema_spring_boot.domains.CategorieEntity;
import com.epul.cinema_spring_boot.domains.FilmEntity;
import com.epul.cinema_spring_boot.domains.PersonnageEntity;
import com.epul.cinema_spring_boot.domains.RealisateurEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.util.Collection;

public interface EntityFilmRepository extends JpaRepository<FilmEntity, Integer> {

    public FilmEntity searchFilm(String name);

    @Modifying
    @Transactional
    @Query("UPDATE FilmEntity fe SET  fe.noFilm= :noFilm ," +
            " fe.titre= :titre ," +
            " fe.duree= :dateDebSej ," +
            " fe.dateSortie= :dateFinSej ," +
            " fe.budget= :nbPersonnes ," +
            " fe.montantRecette= :nbPersonnes ," +
            " fe.noRea= :nbPersonnes ," +
            " fe.codeCat= :codeCat ," +
            " fe.realisateurByNoRea= :realisateurByNoRea ," +
            " fe.categorieByCodeCat= :categorieByCodeCat," +
            " fe.personnagesByNoFilm= :personnagesByNoFilm" +
            " WHERE fe.noFilm = :noFilm")
    public int  updateFilm(@Param("noFilm") int noFilm,
                           @Param("titre") String titre,
                           @Param("duree") int duree,
                           @Param("dateSortie") Date dateSortie,
                           @Param("budget") int budget,
                           @Param("montantRecette") int montantRecette,
                           @Param("noRea") int noRea,
                           @Param("codeCat") String codCat,
                           @Param("realisateurByNoRea")RealisateurEntity realisateurByNoRea,
                           @Param("categorieByCodeCat")CategorieEntity categorieByCodeCat,
                           @Param("personnagesByNoFilm")Collection<PersonnageEntity> personnagesByNoFilm);
}
