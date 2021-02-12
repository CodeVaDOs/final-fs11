package com.marksem.controller;

import com.marksem.dto.request.RequestHouseMaintenance;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseHouseMaintenance;
import com.marksem.service.HouseMaintenanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/houseMaintenance")
@RequiredArgsConstructor
public class HouseMaintenanceController {
    private final HouseMaintenanceService service;

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<PageableResponse<ResponseHouseMaintenance>> readAll(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(service.readAll(page, size));
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<ResponseHouseMaintenance> read(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.read(id));
    }

    @PostMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseHouseMaintenance> create(@RequestBody RequestHouseMaintenance hm) {
        return ResponseEntity.ok(service.create(hm));
    }

    @PutMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseHouseMaintenance> update(@RequestBody RequestHouseMaintenance hm) {
        return ResponseEntity.ok(service.update(hm));
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.delete(id));
    }
}

