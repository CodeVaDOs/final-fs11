package com.marksem.controller;

import com.marksem.dto.request.RequestUser;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseException;
import com.marksem.dto.response.ResponseUser;
import com.marksem.service.FileService;
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
    private final FileService fileService;

    @PostMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<?> create(@ModelAttribute @Valid RequestUser u, @RequestHeader("Authorization") String token, Principal principal) {
        String urlAvatar = null;
        if (u.getAvatar() != null) {
            try {
                urlAvatar = fileService.upload(u.getAvatar(), token);
            } catch (Exception ex) {
                return ResponseEntity
                        .status(ex.hashCode())
                        .body(new ResponseException(ex.getMessage()));
            }
        }
        return ResponseEntity.ok(userService.create(u, urlAvatar, principal.getName()));
    }

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<PageableResponse<ResponseUser>> readAll(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(userService.readAll(page, size));
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
    public ResponseEntity<?> update(@ModelAttribute RequestUser u, @RequestHeader("Authorization") String token) {
        String urlAvatar = null;
        if (u.getAvatar() != null) {
            try {
                urlAvatar = fileService.update(u.getAvatar(), token);
            } catch (Exception ex) {
                return ResponseEntity
                        .status(ex.hashCode())
                        .body(new ResponseException(ex.getMessage()));
            }
        }
        return ResponseEntity.ok(userService.update(u, urlAvatar));
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(userService.delete(id));
    }

}
