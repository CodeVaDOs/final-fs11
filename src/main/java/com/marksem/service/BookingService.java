package com.marksem.service;

import com.marksem.dto.request.RequestBooking;
import com.marksem.dto.response.ResponseBooking;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.BookingRepository;
import com.marksem.repo.HouseRepository;
import com.marksem.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookingService {
    private final BookingRepository bookingRepo;
    private final HouseRepository houseRepo;
    private final UserRepository userRepo;

    public ResponseBooking create(RequestBooking b, String email) {
        return userRepo.findByEmail(email)
                .map(u -> houseRepo.findById(b.getHouseId())
                        .map(h -> bookingRepo.save(b.toEntity(h, u)))
                        .map(ResponseBooking::toDto)
                        .orElseThrow(() -> new NoDataFoundException("house", b.getHouseId())))
                .orElseThrow(() -> new NoDataFoundException(String.format("user with email %s not found", email)));
    }

    public ResponseBooking update(RequestBooking b) {
        return bookingRepo.findById(b.getId())
                .map(i -> {
                    i.setFromDate(b.getFromDate());
                    i.setToDate(b.getToDate());
                    return bookingRepo.save(i);
                })
                .map(ResponseBooking::toDto)
                .orElseThrow(() -> new NoDataFoundException("booking", b.getId()));
    }

    public ResponseBooking read(Long id) {
        return bookingRepo.findById(id)
                .map(ResponseBooking::toDto)
                .orElseThrow(() -> new NoDataFoundException("booking", id));
    }

    public List<ResponseBooking> readAll() {
        return bookingRepo.findAll().stream().map(ResponseBooking::toDto).collect(Collectors.toList());
    }

    public Long delete(Long id) {
        bookingRepo.deleteById(id);
        return id;
    }
}
