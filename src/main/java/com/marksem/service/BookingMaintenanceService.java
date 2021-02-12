package com.marksem.service;

import com.marksem.dto.request.RequestBookingMaintenance;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseBookingMaintenance;
import com.marksem.entity.booking.BookingMaintenance;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.BookingMaintenanceRepository;
import com.marksem.repo.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookingMaintenanceService {
    private final BookingRepository bookingRepo;
    private final BookingMaintenanceRepository bookingMaintenanceRepo;

    public ResponseBookingMaintenance create(RequestBookingMaintenance bm) {
        return bookingRepo.findById(bm.getBookingId())
                .map(b -> bookingMaintenanceRepo.save(bm.toEntity(b)))
                .map(ResponseBookingMaintenance::toDto)
                .orElseThrow(() -> new NoDataFoundException("booking", bm.getBookingId()));
    }

    public ResponseBookingMaintenance update(RequestBookingMaintenance bm) {
        return bookingMaintenanceRepo.findById(bm.getId())
                .map(i -> {
                    i.setText(bm.getText());
                    i.setType(bm.getType());
                    i.setIsActive(bm.getIsActive());
                    return bookingMaintenanceRepo.save(i);
                })
                .map(ResponseBookingMaintenance::toDto)
                .orElseThrow(() -> new NoDataFoundException("booking maintenance", bm.getId()));
    }

    public ResponseBookingMaintenance read(Long id) {
        return bookingMaintenanceRepo.findById(id)
                .map(ResponseBookingMaintenance::toDto)
                .orElseThrow(() -> new NoDataFoundException("booking maintenance", id));
    }

    public PageableResponse<ResponseBookingMaintenance> readAll(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<BookingMaintenance> maintenance = bookingMaintenanceRepo.findAll(pageable);
        return new PageableResponse<>(maintenance.getTotalElements(),
                maintenance.getContent().stream().map(ResponseBookingMaintenance::toDto).collect(Collectors.toList()));
    }

    public Long delete(Long id) {
        bookingMaintenanceRepo.deleteById(id);
        return id;
    }
}
