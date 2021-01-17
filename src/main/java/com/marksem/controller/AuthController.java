package com.marksem.controller;

import com.marksem.dto.request.RequestAuth;
import com.marksem.dto.request.RequestRefreshToken;
import com.marksem.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody RequestAuth request) {
        try {
            return ResponseEntity.ok(authService.authenticate(request.getEmail(), request.getPassword()));
        } catch (AuthenticationException e) {
            return new ResponseEntity<>("Invalid email/password combination", HttpStatus.FORBIDDEN);
        }
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refresh(@RequestBody RequestRefreshToken request) {
        try {
            return ResponseEntity.ok(authService.refresh(request.getRefreshToken()));
        } catch (AuthenticationException e) {
            return new ResponseEntity<>("JWT token is expired or invalid", HttpStatus.UNAUTHORIZED);
        }
    }
}