package com.marksem.controller;

import com.marksem.dto.request.RequestUser;
import com.marksem.dto.response.ResponseUser;
import com.marksem.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("api/v1/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService service;

    @PostMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseUser> create(@RequestBody @Valid RequestUser u) {
        return ResponseEntity.ok(service.create(u));
    }

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public List<ResponseUser> readAll() {
        return service.readAll();
    }

    @GetMapping("profile")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<ResponseUser> getProfile(Principal principal) {
        return ResponseEntity.ok(service.getProfile(principal.getName()));
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<ResponseUser> read(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.read(id));
    }

    @PutMapping()
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseUser> update(@RequestBody @Valid RequestUser u) {
        return ResponseEntity.ok(service.update(u));
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.delete(id));
    }

}
