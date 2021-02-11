package com.marksem.dto.request;

import com.marksem.entity.contact.Contact;
import com.marksem.entity.contact.ContactType;
import com.marksem.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotEmpty;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestContact extends BaseEntity {
    private Long id;
    @NotEmpty
    private String phone;
    @NotEmpty
    private ContactType type;
    @NotEmpty
    private Long userId;

    public Contact toEntity(User user) {
        return Contact.builder()
                .phone(this.phone)
                .type(this.type)
                .user(user)
                .build();
    }
}
