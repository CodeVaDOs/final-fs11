package com.marksem.dto.response;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.MappedSuperclass;
import java.util.Date;

@MappedSuperclass
@Data
@NoArgsConstructor
public class BaseEntity {
    private Long id;
    private Long version;
    private String createdBy;
    private String updatedBy;
    private Date createDate;
    private Date updateDate;

    <T extends com.marksem.entity.BaseEntity> BaseEntity(T entity) {
        this.id = entity.getId();
        this.version = entity.getVersion();
        this.createdBy = entity.getCreatedBy();
        this.updatedBy = entity.getUpdatedBy();
        this.createDate = entity.getCreatedDate();
        this.updateDate = entity.getUpdatedDate();
    }
}
