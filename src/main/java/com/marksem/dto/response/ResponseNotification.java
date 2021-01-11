package com.marksem.dto.response;

import com.marksem.entity.notification.Importance;
import com.marksem.entity.notification.Notification;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseNotification extends BaseEntity {
    private Long id;
    private String text;
    private Boolean isRead;
    private Importance importance;

    public static ResponseNotification toDto(Notification n) {
        return ResponseNotification.builder()
                .text(n.getText())
                .isRead(n.getIsRead())
                .importance(n.getImportance())
                .build();
    }
}
