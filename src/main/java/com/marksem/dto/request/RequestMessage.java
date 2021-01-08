package com.marksem.dto.request;

import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestMessage extends BaseEntity {
    private Long id;
    private Long fromUserId;
    private Long toUserId;
    private String text;
}
