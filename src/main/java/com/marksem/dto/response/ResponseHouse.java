package com.marksem.dto.response;

import com.marksem.entity.house.House;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseHouse extends BaseEntity{
    private String location;
    private String equipment;
    private String area;
    private String description;
    private Double avgRating;

    public static ResponseHouse toDto(House h) {
        return ResponseHouse.builder()
                .location(h.getLocation())
                .equipment(h.getEquipment())
                .area(h.getArea())
                .description(h.getDescription())
                .avgRating(h.getAvgRating())
                .build();
    }
}
