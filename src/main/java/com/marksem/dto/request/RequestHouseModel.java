package com.marksem.dto.request;

import com.marksem.entity.house.HouseModel;
import com.marksem.entity.house.HouseType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotEmpty;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestHouseModel extends BaseEntity {
    private Long id;
    @NotEmpty
    private String name;
    @NotEmpty
    private Long houseTypeId;

    public HouseModel toEntity(HouseType ht) {
        return HouseModel.builder()
                .name(this.name)
                .houseType(ht)
                .build();
    }
}
