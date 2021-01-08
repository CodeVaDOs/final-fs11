package com.marksem.dto.request;

import com.marksem.entity.user.Role;
import com.marksem.entity.user.User;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestUser extends BaseEntity{
    private Long id;
    private String email;
    private String password;
    private Role role;

    public User toEntity(){
        return User.builder().password(this.password).email(this.email).role(this.role).build();
    }
}
