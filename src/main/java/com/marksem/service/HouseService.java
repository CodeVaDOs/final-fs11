package com.marksem.service;

import com.marksem.dto.request.RequestHouse;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseHouse;
import com.marksem.entity.house.House;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.HouseModelRepository;
import com.marksem.repo.HouseRepository;
import com.marksem.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class HouseService {
    private final HouseRepository houseRepo;
    private final UserRepository userRepo;
    private final HouseModelRepository houseModelRepo;

    public ResponseHouse create(RequestHouse h) {
        return userRepo.findById(h.getOwnerId())
                .map(u -> houseModelRepo.findById(h.getHouseModelId())
                        .map(hm -> houseRepo.save(h.toEntity(u, hm)))
                        .orElseThrow(() -> new NoDataFoundException("houseModel", h.getHouseModelId())))
                .map(ResponseHouse::toDto)
                .orElseThrow(() -> new NoDataFoundException("user", h.getOwnerId()));
    }

    public ResponseHouse update(RequestHouse h) {
        return houseRepo.findById(h.getId())
                .map(e -> {
                    e.setLocation(h.getLocation());
                    e.setEquipment(e.getEquipment());
                    e.setArea(h.getArea());
                    e.setAvgRating(h.getAvgRating());
                    e.setDescription(h.getDescription());
                    return ResponseHouse.toDto(houseRepo.save(e));
                })
                .orElseThrow(() -> new NoDataFoundException("house", h.getId()));
    }

    public ResponseHouse read(Long id) {
        return houseRepo.findById(id)
                .map(ResponseHouse::toDto)
                .orElseThrow(() -> new NoDataFoundException("house", id));
    }

    public PageableResponse<ResponseHouse> readAll(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<House> houses = houseRepo.findAll(pageable);
        return new PageableResponse<>(houses.getTotalElements(),
                houses.getContent().stream().map(ResponseHouse::toDto).collect(Collectors.toList()));
    }

    public Long delete(Long id) {
        houseRepo.deleteById(id);
        return id;
    }
}
