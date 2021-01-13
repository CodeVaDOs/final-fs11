package com.marksem.dto.response;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseEntity {
    private Long id;
    private Long version;
    private Long createdBy;
    private Long updatedBy;
    private Long createDate;
    private Long updateDate;
}
