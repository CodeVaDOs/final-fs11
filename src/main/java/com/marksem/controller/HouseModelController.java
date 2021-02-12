package com.marksem.controller;

import com.marksem.dto.request.RequestHouseModel;
import com.marksem.dto.response.ResponseHouseModel;
import com.marksem.service.HouseModelService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/houseModels")
@RequiredArgsConstructor
public class HouseModelController {
    private final HouseModelService service;

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public List<ResponseHouseModel> readAll() {
        return service.readAll();
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<ResponseHouseModel> read(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.read(id));
    }

    @PostMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseHouseModel> create(@RequestBody RequestHouseModel hm) {
        return ResponseEntity.ok(service.create(hm));
    }

    @PutMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseHouseModel> update(@RequestBody RequestHouseModel hm) {
        return ResponseEntity.ok(service.update(hm));
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.delete(id));
    }
}

