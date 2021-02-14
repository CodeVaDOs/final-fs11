package com.marksem.service;

import com.marksem.dto.request.RequestHouseMaintenance;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseHouseMaintenance;
import com.marksem.entity.house.HouseMaintenance;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repository.HouseMaintenanceRepository;
import com.marksem.repository.HouseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class HouseMaintenanceService {
    private final HouseRepository houseRepository;
    private final HouseMaintenanceRepository houseMaintenanceRepository;

    public ResponseHouseMaintenance create(RequestHouseMaintenance hm) {
        return houseRepository.findById(hm.getHouseId())
                .map(h -> houseMaintenanceRepository.save(hm.toEntity(h)))
                .map(ResponseHouseMaintenance::toDto)
                .orElseThrow(() -> new NoDataFoundException("house", hm.getHouseId()));
    }

    public ResponseHouseMaintenance update(RequestHouseMaintenance hm) {
        return houseMaintenanceRepository.findById(hm.getId())
                .map(i -> {
                    i.setText(hm.getText());
                    i.setType(hm.getType());
                    i.setIsActive(hm.getIsActive());
                    return houseMaintenanceRepository.save(i);
                })
                .map(ResponseHouseMaintenance::toDto)
                .orElseThrow(() -> new NoDataFoundException("house maintenance", hm.getId()));
    }

    public ResponseHouseMaintenance read(Long id) {
        return houseMaintenanceRepository.findById(id)
                .map(ResponseHouseMaintenance::toDto)
                .orElseThrow(() -> new NoDataFoundException("house maintenance", id));
    }

    public PageableResponse<ResponseHouseMaintenance> readAll(int page, int size) {
        Page<HouseMaintenance> maintenance = houseMaintenanceRepository.findAll(PageRequest.of(page, size));
        return new PageableResponse<>(maintenance.getTotalElements(),
                maintenance.getContent().stream().map(ResponseHouseMaintenance::toDto).collect(Collectors.toList()));
    }

    public Long delete(Long id) {
        houseMaintenanceRepository.deleteById(id);
        return id;
    }
}
