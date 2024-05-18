package com.dogukancifci.techcareerfullstackbackend.controller;

import com.dogukancifci.techcareerfullstackbackend.model.Todo;
import com.dogukancifci.techcareerfullstackbackend.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController//RESTful web servisi icin (for RESTfuk)
public class TodoController {


    //Dependency Injection
    @Autowired
    private TodoRepository todoRepository;

    //for post
    @PostMapping("/todo")
    Todo newTodo(@RequestBody Todo newTodo) {
        return todoRepository.save(newTodo);
    }
    //for get todos list
    @GetMapping("/todos")
    List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }
}
