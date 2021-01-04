package com.marksem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="documents")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Document extends BaseEntity{
    private String url_file;
    private String name;
    private DocumentType type;

    @ManyToOne
    @JoinColumn(name="house_id")
    private House house;
}
