package com.marksem.dto.response;

import com.marksem.entity.contact.Contact;
import com.marksem.entity.contact.ContactType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseContact extends BaseEntity{
    private String phone;
    private ContactType type;

    public static ResponseContact toDto(Contact c) {
        return ResponseContact.builder()
                .phone(c.getPhone())
                .type(c.getType())
                .build();
    }
}
