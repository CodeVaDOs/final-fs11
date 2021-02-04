package com.marksem.dto.request;

import com.marksem.entity.booking.Booking;
import com.marksem.entity.house.House;
import com.marksem.entity.user.User;
import lombok.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

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
    private String renterPhotoUrl;
    @NotEmpty
    private Boolean isOwner;
    @NotEmpty
    private Long houseId;
    @NotEmpty
    private Long renterId;

    public Booking toEntity(House house, User renter) {
        return Booking.builder()
                .fromDate(this.fromDate)
                .toDate(this.toDate)
                .renterPhotoUrl(this.renterPhotoUrl)
                .isOwner(this.isOwner)
                .house(house)
                .renter(renter)
                .build();
    }
}
