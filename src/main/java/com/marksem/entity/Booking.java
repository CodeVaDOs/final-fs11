package com.marksem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="bookings")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Booking extends BaseEntity{
    private Long from_date;
    private Long to_date;
    private String renter;
    private String renter_photo_url;
    private Boolean isOwner;

    @ManyToOne
    @JoinColumn(name="house_id")
    private House house;

    @OneToOne(mappedBy = "booking")
    private FeedBack feedback;
}
