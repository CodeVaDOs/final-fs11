package com.marksem.dto.request;

import com.marksem.entity.booking.Booking;
import com.marksem.entity.house.House;
import com.marksem.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestBooking extends BaseEntity {
    private Long id;
    @NotEmpty
    private Date fromDate;
    @NotEmpty
    private Date toDate;
    @NotEmpty
    private Boolean isOwner;
    @NotEmpty
    private Long houseId;

    public Booking toEntity(House house, User renter) {
        return Booking.builder()
                .fromDate(this.fromDate)
                .toDate(this.toDate)
                .isOwner(this.isOwner)
                .house(house)
                .renter(renter)
                .bookingMaintenance(new ArrayList<>())
                .build();
    }
}
