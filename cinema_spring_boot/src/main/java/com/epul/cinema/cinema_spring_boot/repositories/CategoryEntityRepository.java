package com.epul.cinema.cinema_spring_boot.repositories;

import com.epul.cinema.cinema_spring_boot.domains.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryEntityRepository extends JpaRepository<CategoryEntity, Byte> {
}
