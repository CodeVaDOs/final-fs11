package com.marksem.dto.request;

import com.marksem.entity.document.Document;
import com.marksem.entity.document.DocumentType;
import com.marksem.entity.house.House;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotEmpty;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestDocument extends BaseEntity {
    private Long id;

    private MultipartFile file;
    @NotEmpty
    private String name;

    private DocumentType type;

    private Long houseId;

    public Document toEntity(House house, String urlFile) {
        return Document.builder()
                .name(this.name)
                .type(this.type)
                .house(house)
                .urlFile(urlFile)
                .build();
    }
}
