package com.marksem.dto.response;

import com.marksem.entity.Importance;
import com.marksem.entity.Notification;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
public class ResponseNotification {
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
