package com.marksem.dto.response;

import com.marksem.entity.task.Task;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class ResponseTask extends BaseEntity {
    private String text;

    public ResponseTask(Task t) {
        super(t);
        this.text = t.getText();
    }
}
