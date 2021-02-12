package com.marksem.dto.request;

import com.marksem.entity.notification.Importance;
import com.marksem.entity.notification.Notification;
import com.marksem.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestNotification extends BaseEntity {
    private Long id;
    private String text;
    private Boolean isRead;
    private Importance importance;
    private Long receiverId;

    public Notification toEntity(User receiver) {
        return Notification.builder()
                .text(this.text)
                .isRead(this.isRead)
                .importance(this.importance)
                .receiver(receiver)
                .build();
    }
}
