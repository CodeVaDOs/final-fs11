package com.marksem.service;

import com.marksem.dto.request.RequestHouseModel;
import com.marksem.dto.response.ResponseHouseModel;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.HouseModelRepository;
import com.marksem.repo.HouseTypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class HouseModelService {
    private final HouseModelRepository houseModelRepo;
    private final HouseTypeRepository houseTypeRepo;

    public ResponseHouseModel create(RequestHouseModel hm) {
        return houseTypeRepo.findById(hm.getHouseTypeId())
                .map(ht -> houseModelRepo.save(hm.toEntity(ht)))
                .map(ResponseHouseModel::toDto)
                .orElseThrow(() -> new NoDataFoundException("house type", hm.getHouseTypeId()));
    }

    public ResponseHouseModel update(RequestHouseModel hm) {
        return houseModelRepo.findById(hm.getId())
                .map(i -> {
                    i.setName(hm.getName());
                    return houseModelRepo.save(i);
                })
                .map(ResponseHouseModel::toDto)
                .orElseThrow(() -> new NoDataFoundException("house model", hm.getId()));
    }

    public ResponseHouseModel read(Long id) {
        return houseModelRepo.findById(id)
                .map(ResponseHouseModel::toDto)
                .orElseThrow(() -> new NoDataFoundException("house model", id));
    }

    public List<ResponseHouseModel> readAll() {
        return houseModelRepo.findAll().stream().map(ResponseHouseModel::toDto).collect(Collectors.toList());
    }

    public Long delete(Long id) {
        houseModelRepo.deleteById(id);
        return id;
    }
}
