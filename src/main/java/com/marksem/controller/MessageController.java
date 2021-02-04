package com.marksem.controller;

import com.marksem.dto.request.RequestMessage;
import com.marksem.dto.response.ResponseMessage;
import com.marksem.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("api/v1/messages")
@RequiredArgsConstructor
public class MessageController {
    private final MessageService service;

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public List<ResponseMessage> readAllByUser(Principal principal) {
        return service.readAllByUser(principal.getName());
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<ResponseMessage> read(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.read(id));
    }

    @PostMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseMessage> create(@RequestBody RequestMessage m) {
        return ResponseEntity.ok(service.create(m));
    }

    @PutMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseMessage> update(@RequestBody RequestMessage m) {
        return ResponseEntity.ok(service.update(m));
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.delete(id));
    }
}
