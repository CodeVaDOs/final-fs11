package com.marksem.dto.response;

import com.marksem.entity.booking.Booking;
import lombok.*;

import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseBooking extends BaseEntity {
    private Date fromDate;
    private Date toDate;
    private String renterPhotoUrl;
    private boolean isOwner;

    public static ResponseBooking toDto(Booking b) {
        return ResponseBooking.builder()
                .fromDate(b.getFromDate())
                .toDate(b.getToDate())
                .renterPhotoUrl(b.getRenterPhotoUrl())
                .isOwner(b.getIsOwner())
                .build();
    }
}
