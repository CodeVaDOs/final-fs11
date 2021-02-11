package com.marksem.dto.response;

import com.marksem.entity.house.HouseModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class ResponseHouseModel {
    private String name;
    private String houseType;

    public static ResponseHouseModel toDto(HouseModel hm) {
        return ResponseHouseModel.builder()
                .name(hm.getName())
                .houseType(hm.getHouseType().getName())
                .build();
    }
}
