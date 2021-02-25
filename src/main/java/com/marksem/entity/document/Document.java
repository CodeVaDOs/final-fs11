package com.marksem.entity.document;

import com.marksem.entity.BaseEntity;
import com.marksem.entity.house.House;
import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "documents")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Document extends BaseEntity {
    @Column(name = "url_file")
    private String urlFile;
    private String name;

    @Enumerated(EnumType.STRING)
    private DocumentType type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "house_id")
    private House house;
}
