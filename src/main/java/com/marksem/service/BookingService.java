package com.marksem.service;

import com.marksem.dto.request.RequestBooking;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseBooking;
import com.marksem.entity.booking.Booking;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repository.BookingRepository;
import com.marksem.repository.HouseRepository;
import com.marksem.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookingService {
    private final BookingRepository bookingRepository;
    private final HouseRepository houseRepository;
    private final UserRepository userRepository;

    public ResponseBooking create(RequestBooking b, String email) {
        return userRepository.findByEmail(email)
                .map(u -> houseRepository.findById(b.getHouseId())
                        .map(h -> bookingRepository.save(b.toEntity(h)))
                        .map(saved -> new ResponseBooking(saved, bookingRepository.getHouseRating(saved.getId())))
                        .orElseThrow(() -> new NoDataFoundException("house", b.getHouseId())))
                .orElseThrow(() -> new NoDataFoundException(String.format("user with email %s not found", email)));
    }

    public ResponseBooking update(RequestBooking b) {
        return bookingRepository.findById(b.getId())
                .map(i -> {
                    i.setFromDate(b.getFromDate());
                    i.setToDate(b.getToDate());
                    return bookingRepository.save(i);
                })
                .map(saved -> new ResponseBooking(saved, bookingRepository.getHouseRating(saved.getId())))
                .orElseThrow(() -> new NoDataFoundException("booking", b.getId()));
    }

    public ResponseBooking read(Long id) {
        return bookingRepository.findById(id)
                .map(b -> new ResponseBooking(b, bookingRepository.getHouseRating(b.getId())))
                .orElseThrow(() -> new NoDataFoundException("booking", id));
    }

    public PageableResponse<ResponseBooking> readAll(int page, int size) {
        Page<Booking> bookings = bookingRepository.findAll(PageRequest.of(page, size));
        return new PageableResponse<>(bookings.getTotalElements(),
                bookings.getContent().stream()
                        .map(b -> new ResponseBooking(b, bookingRepository.getHouseRating(b.getId())))
                        .collect(Collectors.toList()));
    }

    public Long delete(Long id) {
        bookingRepository.deleteById(id);
        return id;
    }
}
