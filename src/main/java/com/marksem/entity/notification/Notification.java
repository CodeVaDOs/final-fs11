package com.marksem.entity.notification;

import com.marksem.entity.BaseEntity;
import com.marksem.entity.user.User;
import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "notifications")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Notification extends BaseEntity {
    private String text;
    private Boolean isRead;

    @Enumerated(EnumType.STRING)
    private Importance importance;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "receiver_id")
    private User receiver;
}
