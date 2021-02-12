package com.marksem.dto.response;

import com.marksem.entity.booking.Booking;
import com.marksem.entity.booking.BookingMaintenance;
import com.marksem.entity.booking.BookingMaintenanceType;
import com.marksem.entity.contact.Contact;
import com.marksem.entity.contact.ContactType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseBookingMaintenance extends BaseEntity{
    private BookingMaintenanceType type;
    private String text;
    private Boolean isActive;
    private Long bookingId;

    public static ResponseBookingMaintenance toDto(BookingMaintenance bm) {
        return ResponseBookingMaintenance.builder()
                .text(bm.getText())
                .type(bm.getType())
                .isActive(bm.getIsActive())
                .bookingId(bm.getBooking().getId())
                .build();
    }
}
