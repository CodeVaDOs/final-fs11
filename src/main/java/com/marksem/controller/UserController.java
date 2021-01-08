package com.marksem.controller;

import com.marksem.dto.request.RequestUser;
import com.marksem.dto.response.ResponseUser;
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

    @PostMapping
    public ResponseUser create(@RequestBody RequestUser u) {
        return service.create(u);
    }

    @GetMapping
    public List<ResponseUser> readAll() {
        return service.readAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<ResponseUser> read(@PathVariable("id") Long id) {
        try{
            return ResponseEntity.ok(service.read(id));
        } catch (NoSuchElementException e){
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping()
    public ResponseEntity<ResponseUser> update(@RequestBody RequestUser u) {
        try {
            return ResponseEntity.ok(service.update(u));
        }catch (NoSuchElementException e){
            return ResponseEntity.notFound().build();
        }
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
