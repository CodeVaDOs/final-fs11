package com.marksem.controller;

import com.marksem.dto.request.RequestHouse;
import com.marksem.entity.house.House;
import com.marksem.service.HouseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("api/v1/houses")
@RequiredArgsConstructor
public class HouseController {
    private final HouseService service;

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public List<House> readAll() {
        return service.readAll();
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<House> read(@PathVariable("id") Long id) {
        try {
            return ResponseEntity.ok(service.read(id));
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public House create(@RequestBody RequestHouse h) {
        return service.create(h);
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
        try {
            return ResponseEntity.ok(service.delete(id));
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
