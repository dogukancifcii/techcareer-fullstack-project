package com.dogukancifci.techcareerfullstackbackend.controller;

import com.dogukancifci.techcareerfullstackbackend.exception.TodoNotFoundException;
import com.dogukancifci.techcareerfullstackbackend.model.Todo;
import com.dogukancifci.techcareerfullstackbackend.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController//RESTful web servisi icin (for RESTfuk)
@CrossOrigin("http://localhost:3000") //hangi kaynaktan veri alacagina izin ver
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

    //Get by id
    @GetMapping("/todo/{id}")
    Todo getTodoById(@PathVariable Long id) {
        return todoRepository.findById(id)
                .orElseThrow(() -> new TodoNotFoundException(id)); //bulamazsa exception gonder
    }

    //Edit
    @PutMapping("/todo/{id}")
    Todo updateTodo(@RequestBody Todo newTodo, @PathVariable Long id) {
        return todoRepository.findById(id)
                .map(todo -> {
                    todo.setTitle(newTodo.getTitle());
                    todo.setContents(newTodo.getContents());
                    todo.setCompleted(newTodo.isCompleted());
                    return todoRepository.save(todo);
                }).orElseThrow(() -> new TodoNotFoundException(id));
    }
}
