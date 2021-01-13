package com.marksem.dto.request;

import com.marksem.entity.user.Role;
import com.marksem.entity.user.User;
import lombok.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestUser extends BaseEntity {
    private Long id;

    @Email
    private String email;

    @NotBlank
    private String password;

    @NotBlank
    private Role role;

    public User toEntity() {
        return User.builder().password(this.password).email(this.email).role(this.role).build();
    }
}
