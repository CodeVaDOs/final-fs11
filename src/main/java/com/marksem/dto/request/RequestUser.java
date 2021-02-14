package com.marksem.dto.request;

import com.marksem.entity.user.Role;
import com.marksem.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestUser extends BaseEntity {
    private Long id;

    private MultipartFile avatar;

    @Email(message = "not email")
    private String email;

    @Size(min = 4, message = "password is too short")
    private String password;

    @NotNull(message = "role is require")
    private Role role;

    @NotNull(message = "name is require")
    private String name;

    private List<RequestContact> contacts = new ArrayList<>();

    public User toEntity(Long managerId, String url) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);

        return User.builder()
                .password(bCryptPasswordEncoder.encode(password))
                .email(this.email)
                .role(this.role)
                .managerId(managerId)
                .name(this.name)
                .urlAvatar(url)
                .notifications(new ArrayList<>())
                .houses(new ArrayList<>())
                .contacts(new ArrayList<>())
                .build();
    }
}
