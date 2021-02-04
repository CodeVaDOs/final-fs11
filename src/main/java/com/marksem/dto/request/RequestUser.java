package com.marksem.dto.request;

import com.marksem.dto.response.ResponseContact;
import com.marksem.dto.response.ResponseHouse;
import com.marksem.dto.response.ResponseNotification;
import com.marksem.entity.contact.Contact;
import com.marksem.entity.house.House;
import com.marksem.entity.notification.Notification;
import com.marksem.entity.user.Language;
import com.marksem.entity.user.Role;
import com.marksem.entity.user.User;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.validation.constraints.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestUser extends BaseEntity {
    private Long id;

    @Email(message = "not email")
    private String email;

    @Size(min = 4, message = "password is too short")
    private String password;

    private Role role;

    @NotNull
    private Long managerId;

    @NotNull
    private String name;

    public User toEntity() {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);

        return User.builder()
                .password(bCryptPasswordEncoder.encode(password))
                .email(this.email)
                .role(this.role)
                .managerId(this.managerId)
                .name(this.name)
                .contacts(new ArrayList<>())
                .houses(new ArrayList<>())
                .notifications(new ArrayList<>())
                .build();
    }
}
