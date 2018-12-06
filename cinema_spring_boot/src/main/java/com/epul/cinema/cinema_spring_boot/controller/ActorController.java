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
    public void addActor(  @Valid @RequestBody ActorEntity actorEntity){
        String destinationPage = "";
        try {
            actorEntity.setLastUpdate(new Timestamp(System.currentTimeMillis()));
            actorEntityRepository.save(actorEntity);
            actorEntityRepository.flush();
        } catch (Exception e) {
            System.out.println(e);
            System.out.println(e.getMessage());
            ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/removeActor")
    public void removeActor(  @Valid @RequestBody ActorEntity actorEntity){
        String destinationPage = "";
        System.out.println("coucou" + actorEntity.getActorId());
        try {
            actorEntityRepository.delete(actorEntity);
            actorEntityRepository.flush();
        } catch (Exception e) {
            System.out.println(e);
            System.out.println(e.getMessage());
            ResponseEntity.notFound().build();
        }
    }



}
