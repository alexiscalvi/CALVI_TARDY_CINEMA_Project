package com.epul.cinema.cinema_spring_boot.controller;

import com.epul.cinema.cinema_spring_boot.domains.ActorEntity;
import com.epul.cinema.cinema_spring_boot.repositories.ActorEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/Actor")
public class ActorController {

    @Autowired
    private ActorEntityRepository actorEntityRepository;

    @GetMapping("/getActors")
    public List<ActorEntity> findAllActors(){
        String destinationPage = "";
        List<ActorEntity> mesActors = null;
        try {
            mesActors = actorEntityRepository.findAll();
        } catch (Exception e) {

            ResponseEntity.notFound().build();
        }
        return mesActors;
    }

}
