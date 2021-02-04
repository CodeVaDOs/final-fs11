package com.marksem.controller;

import com.marksem.dto.request.RequestBooking;
import com.marksem.dto.response.ResponseBooking;
import com.marksem.entity.booking.Booking;
import com.marksem.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("api/v1/bookings")
@RequiredArgsConstructor
public class BookingController {
    private final BookingService service;

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public List<ResponseBooking> readAll() {
        return service.readAll();
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<ResponseBooking> read(@PathVariable("id") Long id) {
         return ResponseEntity.ok(service.read(id));
    }

    @PostMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseBooking> create(@RequestBody RequestBooking b) {
        return ResponseEntity.ok(service.create(b));
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
       return ResponseEntity.ok(service.delete(id));
    }
}
