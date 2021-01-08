package com.marksem.entity.booking;

import com.marksem.entity.BaseEntity;
import com.marksem.entity.booking.Booking;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "feed_backs")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FeedBack extends BaseEntity {
    @OneToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;

    private String review;
    private int rating;
}
