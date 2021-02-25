package com.marksem.dto.request;

import com.marksem.entity.booking.Booking;
import com.marksem.entity.booking.BookingMaintenance;
import com.marksem.entity.booking.BookingMaintenanceType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotEmpty;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestBookingMaintenance extends BaseEntity {
    private Long id;
    @NotEmpty
    private BookingMaintenanceType type;
    private String text;
    @NotEmpty
    private Boolean isActive;
    @NotEmpty
    private Long bookingId;

    public BookingMaintenance toEntity(Booking booking) {
        return BookingMaintenance.builder()
                .text(this.text)
                .type(this.type)
                .isActive(this.isActive)
                .booking(booking)
                .build();
    }
}
