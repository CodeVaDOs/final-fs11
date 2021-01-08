package com.marksem.controller;

import com.marksem.dto.request.RequestHouse;
import com.marksem.entity.house.House;
import com.marksem.service.HouseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("houses")
@RequiredArgsConstructor
public class HouseController {
    private final HouseService service;

    @GetMapping
    public List<House> readAll() {
        return service.readAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<House> read(@PathVariable("id") Long id) {
        try {
            return ResponseEntity.ok(service.read(id));
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public House create(@RequestBody RequestHouse h) {
        return service.create(h);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
        try {
            return ResponseEntity.ok(service.delete(id));
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
