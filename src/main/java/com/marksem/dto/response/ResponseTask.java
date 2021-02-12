package com.marksem.dto.response;

import com.marksem.entity.task.Task;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseTask extends BaseEntity {
    private String text;

    public static ResponseTask toDto(Task t) {
        return ResponseTask.builder()
                .text(t.getText())
                .build();
    }
}
