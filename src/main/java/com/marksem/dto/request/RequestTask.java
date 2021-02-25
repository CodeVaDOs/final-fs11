package com.marksem.dto.request;

import com.marksem.entity.task.Task;
import com.marksem.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestTask extends BaseEntity {
    private Long id;
    private String title;
    private String text;
    private Long userId;

    public Task toEntity(User user) {
        return Task.builder()
                .text(this.text)
                .title(this.title)
                .user(user)
                .build();
    }
}
