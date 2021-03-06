package com.marksem.dto.request;

import com.marksem.dto.request.groups.OnCreate;
import com.marksem.dto.request.groups.OnUpdate;
import com.marksem.entity.transaction.Currency;
import com.marksem.entity.user.Language;
import com.marksem.entity.user.Role;
import com.marksem.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestUser extends BaseEntity {
    @NotNull(groups = OnUpdate.class, message = "user id is require")
    private Long id;

    private MultipartFile avatar;

    @NotBlank(groups = {OnCreate.class, OnUpdate.class}, message = "email is require")
    @Email(groups = {OnCreate.class, OnUpdate.class}, message = "not email")
    private String email;

    @NotBlank(groups = OnCreate.class, message = "password is require")
    @Size(groups = OnCreate.class, min = 4, message = "password is too short")
    private String password;

    @NotNull(groups = OnCreate.class, message = "role is require")
    private Role role;

    @NotBlank(groups = {OnCreate.class, OnUpdate.class}, message = "name is require")
    private String name;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date birthday;

    private Language language;

    private Currency currency;

    private List<RequestContact> contacts = new ArrayList<>();

    public User toEntity(Long managerId, String url) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);

        return User.builder()
                .password(bCryptPasswordEncoder.encode(password))
                .email(this.email)
                .role(this.role)
                .managerId(managerId)
                .name(this.name)
                .birthday(this.birthday)
                .language(this.language)
                .urlAvatar(url)
                .currency(this.currency)
                .notifications(new ArrayList<>())
                .houses(new ArrayList<>())
                .contacts(new ArrayList<>())
                .tasks(new ArrayList<>())
                .build();
    }

    public User update(User u, String urlAvatar){
        u.setEmail(this.email);
        u.setName(this.name);
        if (urlAvatar !=null) u.setUrlAvatar(urlAvatar);
        if (this.birthday != null) u.setBirthday(this.birthday);
        if (this.language != null) u.setLanguage(this.language);
        if (this.currency != null) u.setCurrency(this.currency);
        return u;
    }
}
