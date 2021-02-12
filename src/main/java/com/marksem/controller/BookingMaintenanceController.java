package com.marksem.controller;

import com.marksem.dto.request.RequestBookingMaintenance;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseBookingMaintenance;
import com.marksem.service.BookingMaintenanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/bookingMaintenance")
@RequiredArgsConstructor
public class BookingMaintenanceController {
    private final BookingMaintenanceService service;

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<PageableResponse<ResponseBookingMaintenance>> readAll(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(service.readAll(page, size));
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<ResponseBookingMaintenance> read(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.read(id));
    }

    @PostMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseBookingMaintenance> create(@RequestBody RequestBookingMaintenance bm) {
        return ResponseEntity.ok(service.create(bm));
    }

    @PutMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseBookingMaintenance> update(@RequestBody RequestBookingMaintenance bm) {
        return ResponseEntity.ok(service.update(bm));
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.delete(id));
    }
}

