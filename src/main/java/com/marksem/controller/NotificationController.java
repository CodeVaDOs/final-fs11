package com.marksem.controller;

import com.marksem.dto.request.RequestNotification;
import com.marksem.entity.notification.Notification;
import com.marksem.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("notifications")
@RequiredArgsConstructor
public class NotificationController {
    private final NotificationService service;

    @GetMapping
    public List<Notification> readAll() {
        return service.readAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Notification> read(@PathVariable("id") Long id) {
        try{
            return ResponseEntity.ok(service.read(id));
        } catch (NoSuchElementException e){
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Notification create(@RequestBody RequestNotification n) {
        return service.create(n);
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
