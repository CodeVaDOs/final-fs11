package com.marksem.dto.response;

import com.marksem.entity.house.House;
import com.marksem.entity.house.HouseModel;
import com.marksem.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseHouse extends BaseEntity {
    private String location;
    private String equipment;
    private String area;
    private String description;
    private Double avgRating;
    private Long ownerId;
    private ResponseHouseModel houseModel;

    public static ResponseHouse toDto(House h) {
        return ResponseHouse.builder()
                .location(h.getLocation())
                .equipment(h.getEquipment())
                .area(h.getArea())
                .description(h.getDescription())
                .avgRating(h.getAvgRating())
                .ownerId(h.getOwner().getId())
                .houseModel(ResponseHouseModel.toDto(h.getHouseModel()))
                .build();
    }
}
