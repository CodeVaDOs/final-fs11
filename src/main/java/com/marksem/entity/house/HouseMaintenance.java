package com.marksem.entity.house;

import com.marksem.entity.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "house_maintenances")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HouseMaintenance extends BaseEntity {
    @Enumerated(EnumType.STRING)
    private HouseMaintenanceType type;

    private String text;

    @Column(name = "is_active")
    private boolean isActive;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "house_id")
    private House house;
}
