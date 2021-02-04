package com.marksem.controller;

import com.marksem.dto.request.RequestNotification;
import com.marksem.dto.response.ResponseNotification;
import com.marksem.entity.notification.Notification;
import com.marksem.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("api/v1/notifications")
@RequiredArgsConstructor
public class NotificationController {
    private final NotificationService service;

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public List<ResponseNotification> readAllByUser(Principal principal) {
        return service.readAllByUser(principal.getName());
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<ResponseNotification> read(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.read(id));
    }

    @PostMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseNotification create(@RequestBody RequestNotification n) {
        return service.create(n);
    }

    @PutMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseNotification update(@RequestBody RequestNotification n) {
        return service.update(n);
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.delete(id));
    }
}
