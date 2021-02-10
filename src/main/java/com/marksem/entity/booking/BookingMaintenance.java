package com.marksem.entity.booking;

import com.marksem.entity.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "booking_maintenances")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingMaintenance extends BaseEntity {
    @Enumerated(EnumType.STRING)
    private BookingMaintenanceType type;

    private String text;

    @Column(name = "is_active")
    private boolean isActive;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "booking_id")
    private Booking booking;
}
