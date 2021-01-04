package com.marksem.dto.request;

import com.marksem.entity.Role;
import lombok.*;

@Data
@AllArgsConstructor
public class RequestUser {
    String email;
    String password;
    Role role;
}
