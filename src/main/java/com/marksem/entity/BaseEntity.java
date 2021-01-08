package com.marksem.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

import lombok.AccessLevel;

import static javax.persistence.GenerationType.IDENTITY;

@MappedSuperclass
@Setter(AccessLevel.PUBLIC)
@Getter(AccessLevel.PUBLIC)
@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseEntity extends Auditable<String> implements Serializable {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;

    private Long version;
}
