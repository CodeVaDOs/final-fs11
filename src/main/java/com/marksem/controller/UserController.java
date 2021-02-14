package com.marksem.controller;

import com.marksem.dto.request.RequestUser;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseUser;
import com.marksem.entity.user.Role;
import com.marksem.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController
@RequestMapping("api/v1/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseUser> create(@ModelAttribute @Valid RequestUser u,
                                               @RequestHeader("Authorization") String token, Principal principal) {
        return ResponseEntity.ok(userService.create(u, principal.getName(), token));
    }

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<PageableResponse<ResponseUser>> readAll(@RequestParam(defaultValue = "0") int page,
                                                                  @RequestParam(defaultValue = "10") int size,
                                                                  @RequestParam(defaultValue = "USER") Role role) {
        return ResponseEntity.ok(userService.readAll(page, size, role));
    }

    @GetMapping("profile")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<ResponseUser> getProfile(Principal principal) {
        return ResponseEntity.ok(userService.getProfile(principal.getName()));
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<ResponseUser> read(@PathVariable("id") Long id) {
        return ResponseEntity.ok(userService.read(id));
    }

    @PutMapping()
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseUser> update(@ModelAttribute RequestUser u, @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(userService.update(u, token));
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(userService.delete(id));
    }

}
