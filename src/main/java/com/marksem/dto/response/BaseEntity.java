package com.marksem.dto.response;

import lombok.*;

import javax.persistence.MappedSuperclass;
import java.util.Date;

@MappedSuperclass
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseEntity {
    public Long id;
    private Long version;
    private String createdBy;
    private String updatedBy;
    private Date createDate;
    private Date updateDate;
}
