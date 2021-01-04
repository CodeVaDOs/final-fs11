package com.marksem.dto.request;

import lombok.*;

@Data
@AllArgsConstructor
public class RequestMessage {
    private Long from_user_id;
    private Long to_user_id;
    private String text;
}
