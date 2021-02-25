package com.marksem.dto.response;

import com.marksem.entity.document.Document;
import com.marksem.entity.document.DocumentType;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class ResponseDocument extends BaseEntity {
    private String urlFile;
    private String name;
    private DocumentType type;
    private Long houseId;

    public ResponseDocument(Document d) {
        super(d);
        this.name = d.getName();
        this.urlFile = d.getUrlFile();
        this.type = d.getType();
        this.houseId = d.getHouse().getId();
    }
}
