package com.marksem.dto.response;

import com.marksem.entity.house.HouseMaintenance;
import com.marksem.entity.house.HouseMaintenanceType;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class ResponseHouseMaintenance extends BaseEntity {
    private HouseMaintenanceType type;
    private String text;
    private Boolean isActive;
    private Long houseId;

    public ResponseHouseMaintenance(HouseMaintenance hm) {
        super(hm);
        this.text = hm.getText();
        this.type = hm.getType();
        this.isActive = hm.getIsActive();
        this.houseId = hm.getHouse().getId();
    }
}
