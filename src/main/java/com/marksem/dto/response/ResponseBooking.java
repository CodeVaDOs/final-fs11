package com.marksem.dto.response;

import com.marksem.entity.booking.Booking;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Data
public class ResponseBooking extends BaseEntity {
    private Date fromDate;
    private Date toDate;
    private boolean isOwner;
    private String renter;
    private ResponseHouse house;
    private ResponseFeedBack feedback;

    public ResponseBooking(Booking b) {
        super(b);
        this.fromDate = b.getFromDate();
        this.toDate = b.getToDate();
        this.isOwner = b.getIsOwner();
        this.renter = b.getRenter();
        if (b.getFeedback() != null) this.feedback = new ResponseFeedBack(b.getFeedback());
    }

    public ResponseBooking(Booking b, Long rating) {
        this(b);
        this.house = new ResponseHouse(b.getHouse(), rating);
    }
}
