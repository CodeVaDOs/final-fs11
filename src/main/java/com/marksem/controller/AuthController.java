package com.marksem.controller;

import com.marksem.dto.request.RequestAuth;
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
//    private final ResetPasswordService resetPasswordService;

    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody RequestAuth request) {
        try {
            return ResponseEntity.ok(authService.authenticate(request.getEmail(), request.getPassword()));
        } catch (AuthenticationException e) {
            return new ResponseEntity<>("Invalid email/password combination", HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/refresh")
    public ResponseEntity<?> refresh(@RequestHeader("Refresh-token") String token) {
        try {
            return ResponseEntity.ok(authService.refresh(token));
        } catch (RuntimeException e) {
            return new ResponseEntity<>("JWT token is expired or invalid", HttpStatus.UNAUTHORIZED);
        }
    }

//    @PostMapping("/forgotPassword")
//    public  ResponseEntity<?> forgotPassword(@RequestBody RequestResetPassword request) {
//        try {
//            resetPasswordService.sendMessageToEmail(request.getEmail());
//        } catch (MessagingException e) {
//            new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
}