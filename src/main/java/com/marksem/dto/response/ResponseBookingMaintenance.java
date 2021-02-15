package com.marksem.dto.response;

import com.marksem.entity.booking.BookingMaintenance;
import com.marksem.entity.booking.BookingMaintenanceType;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class ResponseBookingMaintenance extends BaseEntity {
    private BookingMaintenanceType type;
    private String text;
    private Boolean isActive;
    private Long bookingId;

    public ResponseBookingMaintenance(BookingMaintenance bm) {
        super(bm);
        this.type = bm.getType();
        this.text = bm.getText();
        this.isActive = bm.getIsActive();
        this.bookingId = bm.getBooking().getId();
    }
}
