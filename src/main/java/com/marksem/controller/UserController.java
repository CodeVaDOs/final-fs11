package com.marksem.controller;

import com.marksem.dto.request.RequestUser;
import com.marksem.entity.User;
import com.marksem.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("users")
@RequiredArgsConstructor
public class UserController {
    private final UserService service;

    @GetMapping
    public List<User> readAll() {
        return service.readAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<User> read(@PathVariable("id") Long id) {
        try{
            return ResponseEntity.ok(service.read(id));
        } catch (NoSuchElementException e){
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public User create(@RequestBody RequestUser iu) {
        return service.create(iu);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id){
        try{
            return ResponseEntity.ok(service.delete(id));
        } catch (NoSuchElementException e){
            return ResponseEntity.notFound().build();
        }
    }

}
