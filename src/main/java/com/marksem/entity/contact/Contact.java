package com.marksem.entity.contact;

import com.marksem.entity.BaseEntity;
import com.marksem.entity.user.User;
import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "contacts")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Contact extends BaseEntity {
    private String phone;

    @Enumerated(EnumType.STRING)
    private ContactType type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}
