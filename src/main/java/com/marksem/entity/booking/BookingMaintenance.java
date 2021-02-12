package com.marksem.entity.booking;

import com.marksem.entity.BaseEntity;
import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "booking_maintenance")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingMaintenance extends BaseEntity {
    @Enumerated(EnumType.STRING)
    private BookingMaintenanceType type;

    private String text;

    @Column(name = "is_active")
    private Boolean isActive;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "booking_id")
    private Booking booking;
}
