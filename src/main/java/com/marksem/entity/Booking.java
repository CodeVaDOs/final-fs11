package com.marksem.entity;

import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="bookings")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Booking extends BaseEntity{
    private Long from_date;
    private Long to_date;
    private String renter_photo_url;
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
