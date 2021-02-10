package com.marksem.dto.response;

import com.marksem.entity.message.Message;
import com.marksem.entity.user.User;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseMessage extends BaseEntity {
    private Long id;
    private ResponseUser fromUser;
    private ResponseUser toUser;
    private String text;

    public static ResponseMessage toDto(Message m) {
        return ResponseMessage.builder()
                .id(m.getId())
                .fromUser(ResponseUser.toDto(m.getFromUser()))
                .toUser(ResponseUser.toDto(m.getToUser()))
                .text(m.getText())
                .build();
    }
}
