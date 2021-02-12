package com.marksem.controller;

import com.marksem.dto.request.RequestHouse;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseHouse;
import com.marksem.service.HouseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/houses")
@RequiredArgsConstructor
public class HouseController {
    private final HouseService service;

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<PageableResponse<ResponseHouse>> readAll(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(service.readAll(page, size));
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<ResponseHouse> read(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.read(id));
    }

    @PostMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseHouse> create(@RequestBody RequestHouse h) {
        return ResponseEntity.ok(service.create(h));
    }

    @PutMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseHouse> update(@RequestBody RequestHouse h) {
        return ResponseEntity.ok(service.update(h));
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.delete(id));
    }
}
