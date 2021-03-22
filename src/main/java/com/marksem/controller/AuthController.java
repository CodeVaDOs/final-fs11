package com.marksem.controller;

import com.marksem.dto.request.RequestAuth;
import com.marksem.dto.request.RequestPassword;
import com.marksem.dto.request.RequestResetPassword;
import com.marksem.service.AuthService;
import com.marksem.service.ResetPasswordService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import java.io.IOException;

@Validated
@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final AuthService authService;
    private final ResetPasswordService resetPasswordService;

    @Value("${url.client}")
    private String clientUrl;
    @Value("${clientChangePasswordPath}")
    private String clientChangePasswordPath;

    public AuthController(AuthService authService, ResetPasswordService resetPasswordService) {
        this.authService = authService;
        this.resetPasswordService = resetPasswordService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody @Valid RequestAuth request) {
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
            return new ResponseEntity<>("JWT token is expired or invalid", HttpStatus.FORBIDDEN);
        }
    }

    @PostMapping("/forgotPassword")
    public ResponseEntity<?> forgotPassword(@RequestBody @Valid RequestResetPassword request) {
        try {
            resetPasswordService.sendMessageToEmail(request.getEmail());
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (MessagingException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/resetPassword/{token}")
    public void resetPassword(HttpServletResponse response, @PathVariable("token") @NotBlank String token) throws IOException {
        response.sendRedirect(String.format("%s/%s/%s", clientUrl, clientChangePasswordPath, resetPasswordService.resetPassword(token)));
    }

    @PostMapping("/updatePassword")
    public ResponseEntity<?> updatePassword(@RequestBody @Valid RequestPassword request, @RequestHeader("Token") String token) {
        try {
            return ResponseEntity.ok(resetPasswordService.updatePassword(token, request.getPassword()));
        } catch (RuntimeException e) {
            return new ResponseEntity<>("JWT token is expired or invalid", HttpStatus.UNAUTHORIZED);
        }
    }
}