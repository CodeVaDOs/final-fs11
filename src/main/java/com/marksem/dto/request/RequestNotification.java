package com.marksem.dto.request;

import com.marksem.entity.notification.Importance;
import com.marksem.entity.notification.Notification;
import com.marksem.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import java.util.List;


@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestNotification extends BaseEntity {
    private String title;
    private Long id;
    private String text;
    private Boolean isRead = false;
    private Importance importance;
    private List<Long> receivers;

    public RequestNotification(String title, String text, Importance importance) {
        this.title = title;
        this.text = text;
        this.importance = importance;
    }

    public Notification toEntity(User receiver) {
        return Notification.builder()
                .title(this.title)
                .text(this.text)
                .isRead(this.isRead)
                .importance(this.importance)
                .receiver(receiver)
                .build();
    }
}
