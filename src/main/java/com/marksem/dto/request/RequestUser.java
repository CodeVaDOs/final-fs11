package com.marksem.dto.request;

import com.marksem.entity.user.Role;
import com.marksem.entity.user.User;
import lombok.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.validation.constraints.*;
import java.util.ArrayList;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestUser extends BaseEntity {
    private Long id;

    @Email(message = "not email")
    private String email;

    @Size(min = 4, message = "password is too short")
    private String password;

    @NotNull(message = "role is require")
    private Role role;

    @NotNull(message = "name is require")
    private String name;

    public User toEntity(Long managerId) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);

        return User.builder()
                .password(bCryptPasswordEncoder.encode(password))
                .email(this.email)
                .role(this.role)
                .managerId(managerId)
                .name(this.name)
                .contacts(new ArrayList<>())
                .houses(new ArrayList<>())
                .notifications(new ArrayList<>())
                .build();
    }
}
