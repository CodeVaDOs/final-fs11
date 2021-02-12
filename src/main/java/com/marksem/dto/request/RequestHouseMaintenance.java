package com.marksem.dto.request;

import com.marksem.entity.contact.Contact;
import com.marksem.entity.contact.ContactType;
import com.marksem.entity.house.House;
import com.marksem.entity.house.HouseMaintenance;
import com.marksem.entity.house.HouseMaintenanceType;
import com.marksem.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotEmpty;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestHouseMaintenance extends BaseEntity{
    private Long id;
    @NotEmpty
    private HouseMaintenanceType type;
    private String text;
    @NotEmpty
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
