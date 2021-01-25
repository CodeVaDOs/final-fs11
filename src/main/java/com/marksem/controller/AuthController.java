package com.marksem.controller;

import com.marksem.dto.request.RequestAuth;
import com.marksem.dto.request.RequestResetPassword;
import com.marksem.dto.request.RequestUpdatePassword;
import com.marksem.service.AuthService;
import com.marksem.service.ResetPasswordService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final AuthService authService;
    private final ResetPasswordService resetPasswordService;

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

    @PostMapping("/forgotPassword")
    public  ResponseEntity<?> forgotPassword(@RequestBody RequestResetPassword request){
        try {
            resetPasswordService.sendMessageToEmail(request.getEmail());
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (MessagingException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/resetPassword/{token}")
    public void resetPassword(HttpServletResponse response, @PathVariable("token") String token) throws IOException {
        try {
            String resetToken = resetPasswordService.resetPassword(token);
            response.addHeader("token", resetToken);
            response.sendRedirect("http://localhost:3000/#/forgotpassword");
        } catch (RuntimeException e) {
            response.sendError(HttpStatus.UNAUTHORIZED.value(), "token is expired");
            response.sendRedirect("http://localhost:3000/#/forgotpassword");
        }
    }

    @PostMapping("/updatePassword")
    public ResponseEntity<?> updatePassword(@RequestBody RequestUpdatePassword request, @RequestHeader("Token") String token) {
        try {
            return ResponseEntity.ok(resetPasswordService.updatePassword(token, request.getPassword()));
        } catch (RuntimeException e) {
            return new ResponseEntity<>("JWT token is expired or invalid", HttpStatus.UNAUTHORIZED);
        }
    }
}