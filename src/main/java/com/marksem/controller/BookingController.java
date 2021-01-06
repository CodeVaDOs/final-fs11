package com.marksem.controller;

import com.marksem.dto.request.RequestBooking;
import com.marksem.dto.request.RequestHouse;
import com.marksem.entity.Booking;
import com.marksem.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("bookings")
@RequiredArgsConstructor
public class BookingController {
    private final BookingService service;

    @GetMapping
    public List<Booking> readAll() {
        return service.readAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Booking> read(@PathVariable("id") Long id) {
        try{
            return ResponseEntity.ok(service.read(id));
        } catch (NoSuchElementException e){
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Booking create(@RequestBody RequestBooking b) {
        return service.create(b);
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
