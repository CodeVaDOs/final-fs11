package com.marksem.dto.response;

import com.marksem.entity.house.HouseModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
public class ResponseHouseModel {
    private Long id;
    private String name;
    private String houseType;

    public ResponseHouseModel(HouseModel hm) {
        this.id = hm.getId();
        this.name = hm.getName();
        this.houseType = hm.getHouseType().getName();
    }
}
