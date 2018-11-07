package com.epul.cinema.cinema_spring_boot.controller;

import com.epul.cinema.cinema_spring_boot.domains.ActorEntity;
import com.epul.cinema.cinema_spring_boot.repositories.ActorEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.sql.Timestamp;
import java.text.DateFormat;
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

    @PostMapping("/addActor")
    public void findAllActors(  @Valid @RequestBody ActorEntity actorEntity){
        String destinationPage = "";
        try {
            System.out.println(actorEntity.getActorId());
            System.out.println(actorEntity.getFirstName());
            System.out.println(actorEntity.getLastName());
            System.out.println(actorEntity.getLastUpdate());
            actorEntity.setLastUpdate(new Timestamp(System.currentTimeMillis()));
            actorEntityRepository.saveAndFlush(actorEntity);
        } catch (Exception e) {

            ResponseEntity.notFound().build();
        }
    }



}
