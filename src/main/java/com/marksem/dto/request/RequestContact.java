package com.marksem.dto.request;

import com.marksem.dto.request.groups.OnCreate;
import com.marksem.dto.request.groups.OnUpdate;
import com.marksem.entity.contact.Contact;
import com.marksem.entity.contact.ContactType;
import com.marksem.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestContact extends BaseEntity {
    @Null(groups = OnCreate.class)
    @NotNull(groups = OnUpdate.class, message = "contact id is require")
    private Long id;

    @NotBlank(groups = OnCreate.class, message = "phone is require")
    private String phone;

    @NotNull(groups = OnCreate.class, message = "contact type is require")
    private ContactType type;

    private Long userId;

    public Contact toEntity(User user) {
        return Contact.builder()
                .phone(this.phone)
                .type(this.type)
                .user(user)
                .build();
    }
}
