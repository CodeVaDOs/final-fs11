package com.marksem.dto.request;

import com.marksem.entity.*;
import lombok.*;

@Data
@AllArgsConstructor
public class RequestUser {
    private Long id;
    private String email;
    private String password;
    private Role role;

    public User toEntity(){
        return User.builder().password(this.password).email(this.email).role(this.role).build();
    }
}
