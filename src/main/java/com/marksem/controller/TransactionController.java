package com.marksem.controller;

import com.marksem.dto.request.RequestTransaction;
import com.marksem.dto.response.ResponseTransaction;
import com.marksem.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/transactions")
@RequiredArgsConstructor
public class TransactionController {
    private final TransactionService service;

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public List<ResponseTransaction> readAll() {
        return service.readAll();
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<ResponseTransaction> read(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.read(id));
    }

    @PostMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseTransaction> create(@RequestBody RequestTransaction t) {
        return ResponseEntity.ok(service.create(t));
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.delete(id));
    }
}
