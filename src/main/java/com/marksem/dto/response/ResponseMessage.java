package com.marksem.dto.response;

import com.marksem.entity.User;
import lombok.*;

@Data
@AllArgsConstructor
public class ResponseMessage {
    private Long id;
    private User from_user;
    private User to_user;
    private String text;
}
