package com.marksem.dto.request;

import lombok.*;

import javax.validation.constraints.NotEmpty;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestMessage extends BaseEntity {
    private Long id;
    @NotEmpty
    private Long fromUserId;
    @NotEmpty
    private Long toUserId;
    @NotEmpty
    private String text;
}
