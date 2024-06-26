package com.dogukancifci.techcareerfullstackbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.Date;
@Data //Getter-Setter
@NoArgsConstructor //Empty constructor
@AllArgsConstructor//Constructor
@Entity //Springboot-Mysql
public class Todo {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String contents;
    private boolean completed;
}
