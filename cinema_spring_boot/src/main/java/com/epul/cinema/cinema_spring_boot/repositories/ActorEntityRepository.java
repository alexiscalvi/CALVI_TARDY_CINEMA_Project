package com.epul.cinema.cinema_spring_boot.repositories;

import com.epul.cinema.cinema_spring_boot.domains.ActorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActorEntityRepository extends JpaRepository<ActorEntity, Short> {
}
