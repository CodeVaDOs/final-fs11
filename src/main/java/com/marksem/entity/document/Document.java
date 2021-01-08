package com.marksem.entity.document;

import com.marksem.entity.BaseEntity;
import com.marksem.entity.document.DocumentType;
import com.marksem.entity.house.House;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="documents")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Document extends BaseEntity {
    @Column(name = "url_file")
    private String urlFile;
    private String name;
    private DocumentType type;

    @ManyToOne
    @JoinColumn(name="house_id")
    private House house;
}
