package com.marksem.dto.response;

import com.marksem.entity.Role;
import lombok.*;

@Data
@AllArgsConstructor
public class ResponseUser {
    private Long id;
    private String email;
    private String password;
    private Role role;
}
