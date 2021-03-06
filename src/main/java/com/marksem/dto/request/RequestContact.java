package com.marksem.dto.request;

import com.marksem.entity.contact.Contact;
import com.marksem.entity.contact.ContactType;
import com.marksem.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestContact extends BaseEntity {

    private Long id;

    @Size(min = 10, message = "phone number is too short")
    private String phone;

    @NotNull(message = "contact type is require")
    private ContactType type;

    public Contact toEntity(User user) {
        return Contact.builder()
                .phone(this.phone)
                .type(this.type)
                .user(user)
                .build();
    }
}
