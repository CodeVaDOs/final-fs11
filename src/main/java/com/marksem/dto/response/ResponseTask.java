package com.marksem.dto.response;

import com.marksem.entity.task.Task;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class ResponseTask extends BaseEntity {
    private String text;
    private String title;

    public ResponseTask(Task t) {
        super(t);
        this.title = t.getTitle();
        this.text = t.getText();
    }
}
