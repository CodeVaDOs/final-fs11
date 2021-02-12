package com.marksem.dto.response;

import com.marksem.entity.notification.Importance;
import com.marksem.entity.notification.Notification;
import com.marksem.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseNotification extends BaseEntity {
    private String text;
    private Boolean isRead;
    private Importance importance;
    private User receiver;

    public static ResponseNotification toDto(Notification n) {
        return ResponseNotification.builder()
                .text(n.getText())
                .isRead(n.getIsRead())
                .importance(n.getImportance())
                .receiver(n.getReceiver())
                .build();
    }
}
