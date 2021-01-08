package com.marksem.service;

import com.marksem.dto.request.RequestBooking;
import com.marksem.entity.booking.Booking;
import com.marksem.repo.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class BookingService {
    private final BookingRepository repo;

    public Booking create(RequestBooking b){
        return repo.save(new Booking());
    }

    public Booking read(Long id){
        return repo.findById(id).orElseThrow(NoSuchElementException::new);
    }

    public List<Booking> readAll(){
        return repo.findAll();
    }

    public Long delete(Long id){
        repo.deleteById(id);
        return id;
    }
}
