package com.marksem.dto.response;

import com.marksem.entity.notification.Importance;
import com.marksem.entity.notification.Notification;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class ResponseNotification extends BaseEntity {
    private String title;
    private String text;
    private Boolean isRead;
    private Importance importance;
    private Long receiverId;

    public ResponseNotification(Notification n) {
        super(n);
        this.title = n.getTitle();
        this.text = n.getText();
        this.isRead = n.getIsRead();
        this.importance = n.getImportance();
        this.receiverId = n.getReceiver().getId();
    }
}
