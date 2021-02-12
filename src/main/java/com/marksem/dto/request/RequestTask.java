package com.marksem.dto.request;

import com.marksem.entity.task.Task;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestTask extends BaseEntity {
    private Long id;
    private String text;

    public Task toEntity() {
        return Task.builder()
                .text(this.text)
                .build();
    }
}
