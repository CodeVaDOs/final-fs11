package com.marksem.dto.response;

import com.marksem.entity.house.HouseImage;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseHouseImage extends BaseEntity {
    private String url;
    private Long houseId;

    public static ResponseHouseImage toDto(HouseImage image) {
        return ResponseHouseImage.builder()
                .url(image.getUrl())
                .houseId(image.getHouse().getId())
                .build();
    }
}
