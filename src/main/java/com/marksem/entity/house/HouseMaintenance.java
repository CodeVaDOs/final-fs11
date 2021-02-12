package com.marksem.entity.house;

import com.marksem.entity.BaseEntity;
import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "house_maintenance")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HouseMaintenance extends BaseEntity {
    @Enumerated(EnumType.STRING)
    private HouseMaintenanceType type;

    private String text;

    @Column(name = "is_active")
    private Boolean isActive;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "house_id")
    private House house;
}
