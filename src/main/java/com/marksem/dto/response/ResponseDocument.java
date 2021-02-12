package com.marksem.dto.response;

import com.marksem.entity.document.Document;
import com.marksem.entity.document.DocumentType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseDocument extends BaseEntity{
    private String urlFile;
    private String name;
    private DocumentType type;
    private Long houseId;

    public static ResponseDocument toDto(Document d) {
        return ResponseDocument.builder()
                .name(d.getName())
                .urlFile(d.getUrlFile())
                .type(d.getType())
                .houseId(d.getHouse().getId())
                .build();
    }
}
