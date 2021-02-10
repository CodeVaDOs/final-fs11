package com.marksem.repo;

import com.marksem.entity.booking.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BookingRepository extends JpaRepository<Booking, Long> {
  @Query(
      value = "SELECT COUNT(*)FROM bookings WHERE from_date < now() AND to_date > now()",
      nativeQuery = true)
  long getBookingsQuantity();
}
