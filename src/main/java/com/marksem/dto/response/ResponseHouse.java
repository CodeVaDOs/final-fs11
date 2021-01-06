package com.marksem.dto.response;

import com.marksem.entity.House;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
public class ResponseHouse {
    private Long id;
    private String location;
    private String equipment;
    private String area;
    private String description;
    private Double avg_rating;

    public static ResponseHouse toDto(House h) {
        return ResponseHouse.builder()
                .location(h.getLocation())
                .equipment(h.getEquipment())
                .area(h.getArea())
                .description(h.getDescription())
                .avg_rating(h.getAvg_rating())
                .build();
    }
}
