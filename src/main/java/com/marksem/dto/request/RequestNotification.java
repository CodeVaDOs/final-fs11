package com.marksem.dto.request;

import com.marksem.entity.notification.Importance;
import lombok.*;

import javax.validation.constraints.NotEmpty;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestNotification extends BaseEntity {
    private Long id;
    private String text;
    private Boolean isRead;
    private Importance importance;
    private Long userId;
}
