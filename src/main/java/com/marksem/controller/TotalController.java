package com.marksem.controller;

import com.marksem.entity.user.Role;
import com.marksem.entity.user.User;
import com.marksem.service.TotalService;
import com.marksem.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("api/v1/total")
@RequiredArgsConstructor
public class TotalController {
    private final TotalService totalService;
    private final UserService userService;

    @GetMapping("accessPanel")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<?> getAccessPanelInfo(Principal principal) {
        User user = userService.getUserByEmail(principal.getName());
        if (user.getRole().equals(Role.USER)){
            return ResponseEntity.ok(totalService.getAccessPanelUserInfo(user.getId()));
        } else {
            return ResponseEntity.ok(totalService.getAccessPanelManagerInfo(user.getId()));
        }
    }
}
