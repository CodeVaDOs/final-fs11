package com.marksem.service;

import com.marksem.dto.request.RequestBookingMaintenance;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseBookingMaintenance;
import com.marksem.entity.booking.BookingMaintenance;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repository.BookingMaintenanceRepository;
import com.marksem.repository.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookingMaintenanceService {
    private final BookingRepository bookingRepository;
    private final BookingMaintenanceRepository bookingMaintenanceRepository;

    public ResponseBookingMaintenance create(RequestBookingMaintenance bm) {
        return bookingRepository.findById(bm.getBookingId())
                .map(b -> bookingMaintenanceRepository.save(bm.toEntity(b)))
                .map(ResponseBookingMaintenance::new)
                .orElseThrow(() -> new NoDataFoundException("booking", bm.getBookingId()));
    }

    public ResponseBookingMaintenance update(RequestBookingMaintenance bm) {
        return bookingMaintenanceRepository.findById(bm.getId())
                .map(i -> {
                    i.setText(bm.getText());
                    i.setType(bm.getType());
                    i.setIsActive(bm.getIsActive());
                    return bookingMaintenanceRepository.save(i);
                })
                .map(ResponseBookingMaintenance::new)
                .orElseThrow(() -> new NoDataFoundException("booking maintenance", bm.getId()));
    }

    public ResponseBookingMaintenance read(Long id) {
        return bookingMaintenanceRepository.findById(id)
                .map(ResponseBookingMaintenance::new)
                .orElseThrow(() -> new NoDataFoundException("booking maintenance", id));
    }

    public PageableResponse<ResponseBookingMaintenance> readAll(int page, int size) {
        Page<BookingMaintenance> maintenance = bookingMaintenanceRepository.findAll(PageRequest.of(page, size));
        return new PageableResponse<>(maintenance.getTotalElements(),
                maintenance.getContent().stream().map(ResponseBookingMaintenance::new).collect(Collectors.toList()));
    }

    public Long delete(Long id) {
        bookingMaintenanceRepository.deleteById(id);
        return id;
    }
}
