package com.marksem.service;

import com.marksem.entity.booking.Booking;
import com.marksem.entity.user.User;
import com.marksem.repository.BookingRepository;
import com.marksem.repository.NotificationRepository;
import com.marksem.repository.RefreshTokenRepository;
import com.marksem.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SchedulerService {
    private final RefreshTokenRepository refreshTokenRepository;
    private final BookingRepository bookingRepository;
    private final UserRepository userRepository;
    private final NotificationRepository notificationRepository;

    @Scheduled(cron = "0 0 0 * * *")
    private void deleteExpiredTokens() {
        Date now = new Date();
        refreshTokenRepository.deleteByExpirationDateBefore(now);
    }

    private void saveNotification(Booking b, String title, String text) {
        User owner = userRepository.getBookingOwner(b.getHouse().getId());

        notificationRepository.saveFromServer(title, text, owner.getId());
        notificationRepository.saveFromServer(title, text, owner.getManagerId());
    }

    @Scheduled(cron = "0 0 0 * * *")
    private void notificationAboutBooking() {
        Date now = new Date();
        LocalDateTime tomorrow = LocalDateTime.now().plusDays(1);

        List<Booking> startingBookings = bookingRepository.findByFromDateBetween(now, java.sql.Timestamp.valueOf(tomorrow));
        startingBookings.forEach(b -> saveNotification(b, "Початок оренди", String.format("%s починається оренда будинку %d", b.getFromDate().toString(), b.getHouse().getId())));

        List<Booking> endingBookings = bookingRepository.findByToDateBetween(now, java.sql.Timestamp.valueOf(tomorrow));
        endingBookings.forEach(b -> saveNotification(b, "Кінець оренди", String.format("%s закінчується оренда будинку %d", b.getFromDate().toString(), b.getHouse().getId())));
    }
}
