package com.marksem.repository;

import com.marksem.entity.booking.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    @Query(
            value = "SELECT COUNT(*)FROM bookings WHERE from_date < now() AND to_date > now()",
            nativeQuery = true)
    Long getBookingsQuantity();

    @Query(
            value = "SELECT AVG(fb.rating) FROM feed_backs fb,  bookings b WHERE b.id = fb.booking_id AND b.house_id = :id",
            nativeQuery = true)
    Long getHouseRating(Long id);

    public List<Booking> findByFromDateBetween(Date now, Date date);

    public List<Booking> findByToDateBetween(Date now, Date date);
}
