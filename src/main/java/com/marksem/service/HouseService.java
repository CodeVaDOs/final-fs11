package com.marksem.service;

import com.marksem.dto.request.RequestHouse;
import com.marksem.dto.response.ResponseHouse;
import com.marksem.dto.response.ResponseMessage;
import com.marksem.dto.response.ResponseUser;
import com.marksem.entity.house.House;
import com.marksem.entity.message.Message;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.HouseRepository;
import com.marksem.repo.MessageRepository;
import com.marksem.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class HouseService {
    private final HouseRepository houseRepo;
    private final UserRepository userRepo;

    public ResponseHouse create(RequestHouse h) {
        return userRepo.findById(h.getOwnerId())
                .map(u -> houseRepo.save(h.toEntity(u)))
                .map(ResponseHouse::toDto)
                .orElseThrow(()->new NoDataFoundException("house", h.getOwnerId()));
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
                .orElseThrow(() ->  new NoDataFoundException("house", h.getId()));
    }

    public ResponseHouse read(Long id) {
        return houseRepo.findById(id)
                .map(ResponseHouse::toDto)
                .orElseThrow(() -> new NoDataFoundException("house", id));
    }

    public List<ResponseHouse> readAll() {
        return houseRepo.findAll().stream().map(ResponseHouse::toDto).collect(Collectors.toList());
    }

    public Long delete(Long id) {
        houseRepo.deleteById(id);
        return id;
    }
}
