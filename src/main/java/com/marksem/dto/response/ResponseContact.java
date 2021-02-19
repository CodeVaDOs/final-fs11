package com.marksem.dto.response;

import com.marksem.entity.contact.Contact;
import com.marksem.entity.contact.ContactType;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class ResponseContact extends BaseEntity {
    private String phone;
    private ContactType type;

    public ResponseContact(Contact c) {
        super(c);
        this.type = c.getType();
        this.phone = c.getPhone();
    }
}
