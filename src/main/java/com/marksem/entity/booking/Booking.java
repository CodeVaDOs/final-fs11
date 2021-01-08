package com.marksem.entity.booking;

import com.marksem.entity.BaseEntity;
import com.marksem.entity.house.House;
import com.marksem.entity.user.User;
import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="bookings")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Booking extends BaseEntity {
    @Column(name = "from_date")
    private Long fromDate;

    @Column(name = "to_date")
    private Long toDate;

    @Column(name = "renter_photo_url")
    private String renterPhotoUrl;

    private Boolean isOwner;

    @ManyToOne
    @JoinColumn(name="house_id")
    private House house;

    @OneToOne(mappedBy = "booking")
    private FeedBack feedback;

    @ManyToOne
    @JoinColumn(name="renter_id")
    private User renter;
}
