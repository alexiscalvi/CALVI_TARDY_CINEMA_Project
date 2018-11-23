package com.epul.cinema.cinema_spring_boot.controller;

import com.epul.cinema.cinema_spring_boot.domains.ActorEntity;
import com.epul.cinema.cinema_spring_boot.domains.LanguageEntity;
import com.epul.cinema.cinema_spring_boot.repositories.ActorEntityRepository;
import com.epul.cinema.cinema_spring_boot.repositories.LanguageEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/Language")
public class LanguageController {

    @Autowired
    private LanguageEntityRepository languageEntityRepository;

    @GetMapping("/getLanguages")
    public List<LanguageEntity> findAllLanguages(){
        String destinationPage = "";
        List<LanguageEntity> languageEntityList = null;
        try {
            languageEntityList = languageEntityRepository.findAll();
        } catch (Exception e) {

            System.out.println(e);
            ResponseEntity.notFound().build();
        }
        return languageEntityList;
    }

}
