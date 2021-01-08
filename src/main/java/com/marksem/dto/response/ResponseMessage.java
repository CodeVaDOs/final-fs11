package com.marksem.dto.response;

import com.marksem.entity.user.User;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class ResponseMessage extends BaseEntity{
    private Long id;
    private User fromUser;
    private User toUser;
    private String text;
}
