package com.dogukancifci.techcareerfullstackbackend.exception;

public class TodoNotFoundException extends RuntimeException{
    public TodoNotFoundException(Long id){
        super("Todo item bulunamadi: "+id);
    }
}
