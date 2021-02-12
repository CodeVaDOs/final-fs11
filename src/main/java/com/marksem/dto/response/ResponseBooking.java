package com.marksem.dto.response;

import com.marksem.entity.booking.Booking;
import com.marksem.entity.booking.FeedBack;
import lombok.*;

import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseBooking extends BaseEntity {
    private Date fromDate;
    private Date toDate;
    private boolean isOwner;
    private ResponseUser renter;
    private ResponseHouse house;
    private ResponseFeedBack feedback;

    public static ResponseBooking toDto(Booking b) {
        return ResponseBooking.builder()
                .fromDate(b.getFromDate())
                .toDate(b.getToDate())
                .isOwner(b.getIsOwner())
                .renter(ResponseUser.toDto(b.getRenter()))
                .house(ResponseHouse.toDto(b.getHouse()))
                .feedback(ResponseFeedBack.toDto(b.getFeedback()))
                .build();
    }
}
