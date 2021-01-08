package com.marksem.dto.request;

import com.marksem.entity.notification.Importance;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestNotification extends BaseEntity {
    private Long id;
    private String text;
    private Boolean isRead;
    private Importance importance;
}
