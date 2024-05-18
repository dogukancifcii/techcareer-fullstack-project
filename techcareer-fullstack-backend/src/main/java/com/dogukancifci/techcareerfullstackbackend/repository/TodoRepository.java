package com.dogukancifci.techcareerfullstackbackend.repository;

import com.dogukancifci.techcareerfullstackbackend.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
