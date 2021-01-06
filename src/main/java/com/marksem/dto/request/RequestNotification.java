package com.marksem.dto.request;

import com.marksem.entity.Importance;
import lombok.*;

@Data
@AllArgsConstructor
public class RequestNotification {
    private Long id;
    private String text;
    private Boolean isRead;
    private Importance importance;
}
