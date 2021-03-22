package com.marksem.dto.request;

import com.marksem.entity.house.House;
import com.marksem.entity.house.HouseMaintenance;
import com.marksem.entity.house.HouseMaintenanceType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotEmpty;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestHouseMaintenance extends BaseEntity {
    private Long id;
    @NotEmpty
    private HouseMaintenanceType type;
    private String text;
    private Boolean isActive;
    @NotEmpty
    private Long houseId;

    public HouseMaintenance toEntity(House house) {
        return HouseMaintenance.builder()
                .text(this.text)
                .type(this.type)
                .isActive(this.isActive)
                .house(house)
                .build();
    }
}
