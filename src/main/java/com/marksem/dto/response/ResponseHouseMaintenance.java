package com.marksem.dto.response;

import com.marksem.entity.house.HouseMaintenance;
import com.marksem.entity.house.HouseMaintenanceType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseHouseMaintenance extends BaseEntity {
    private HouseMaintenanceType type;
    private String text;
    private Boolean isActive;
    private Long houseId;

    public static ResponseHouseMaintenance toDto(HouseMaintenance hm) {
        return ResponseHouseMaintenance.builder()
                .text(hm.getText())
                .type(hm.getType())
                .isActive(hm.getIsActive())
                .houseId(hm.getHouse().getId())
                .build();
    }
}
