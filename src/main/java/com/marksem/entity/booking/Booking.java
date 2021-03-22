package com.marksem.entity.booking;

import com.marksem.entity.BaseEntity;
import com.marksem.entity.house.House;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "bookings")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Booking extends BaseEntity {
    @Column(name = "from_date")
    private Date fromDate;

    @Column(name = "to_date")
    private Date toDate;

    private Boolean isOwner;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "house_id")
    private House house;

    @OneToOne(mappedBy = "booking", fetch = FetchType.LAZY)
    private FeedBack feedback;

    private String renter;

    @OneToMany(mappedBy = "booking", fetch = FetchType.LAZY)
    private List<BookingMaintenance> bookingMaintenance = new ArrayList<>();
}
