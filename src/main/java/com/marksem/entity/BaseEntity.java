package com.marksem.entity;

import lombok.*;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;

@MappedSuperclass
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;

    private Long version;
    private Long created_by;
    private Long updated_by;

    @Column(updatable = false)
    private Long create_date;

    @Column(insertable = false)
    private Long update_date;


    @PrePersist
    private void toCreate() {
        create_date = new Date().getTime();
    }

    @PreUpdate
    private void toUpdate() {
        update_date = new Date().getTime();
    }
}
