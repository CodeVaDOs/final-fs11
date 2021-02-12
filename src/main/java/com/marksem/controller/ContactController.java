package com.marksem.controller;

import com.marksem.dto.request.RequestContact;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseContact;
import com.marksem.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/contacts")
@RequiredArgsConstructor
public class ContactController {
    private final ContactService service;

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<PageableResponse<ResponseContact>> readAll(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(service.readAll(page, size));
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<ResponseContact> read(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.read(id));
    }

    @PostMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseContact> create(@RequestBody RequestContact c) {
        return ResponseEntity.ok(service.create(c));
    }

    @PutMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseContact> update(@RequestBody RequestContact c) {
        return ResponseEntity.ok(service.update(c));
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.delete(id));
    }
}
