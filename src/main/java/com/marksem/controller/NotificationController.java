package com.marksem.controller;

import com.marksem.dto.request.RequestNotification;
import com.marksem.entity.notification.Notification;
import com.marksem.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("api/v1/notifications")
@RequiredArgsConstructor
public class NotificationController {
    private final NotificationService service;

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public List<Notification> readAll() {
        return service.readAll();
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<Notification> read(@PathVariable("id") Long id) {
        try {
            return ResponseEntity.ok(service.read(id));
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public Notification create(@RequestBody RequestNotification n) {
        return service.create(n);
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
