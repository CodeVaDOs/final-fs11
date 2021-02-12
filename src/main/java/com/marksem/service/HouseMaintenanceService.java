package com.marksem.service;

import com.marksem.dto.request.RequestHouseMaintenance;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseHouseMaintenance;
import com.marksem.entity.house.HouseMaintenance;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.HouseMaintenanceRepository;
import com.marksem.repo.HouseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class HouseMaintenanceService {
    private final HouseRepository houseRepo;
    private final HouseMaintenanceRepository houseMaintenanceRepo;

    public ResponseHouseMaintenance create(RequestHouseMaintenance hm) {
        return houseRepo.findById(hm.getHouseId())
                .map(h -> houseMaintenanceRepo.save(hm.toEntity(h)))
                .map(ResponseHouseMaintenance::toDto)
                .orElseThrow(() -> new NoDataFoundException("house", hm.getHouseId()));
    }

    public ResponseHouseMaintenance update(RequestHouseMaintenance hm) {
        return houseMaintenanceRepo.findById(hm.getId())
                .map(i -> {
                    i.setText(hm.getText());
                    i.setType(hm.getType());
                    i.setIsActive(hm.getIsActive());
                    return houseMaintenanceRepo.save(i);
                })
                .map(ResponseHouseMaintenance::toDto)
                .orElseThrow(() -> new NoDataFoundException("house maintenance", hm.getId()));
    }

    public ResponseHouseMaintenance read(Long id) {
        return houseMaintenanceRepo.findById(id)
                .map(ResponseHouseMaintenance::toDto)
                .orElseThrow(() -> new NoDataFoundException("house maintenance", id));
    }

    public PageableResponse<ResponseHouseMaintenance> readAll(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<HouseMaintenance> maintenance = houseMaintenanceRepo.findAll(pageable);
        return new PageableResponse<>(maintenance.getTotalElements(),
                maintenance.getContent().stream().map(ResponseHouseMaintenance::toDto).collect(Collectors.toList()));
    }

    public Long delete(Long id) {
        houseMaintenanceRepo.deleteById(id);
        return id;
    }
}
