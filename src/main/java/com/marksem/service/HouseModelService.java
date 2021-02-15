package com.marksem.service;

import com.marksem.dto.request.RequestHouseModel;
import com.marksem.dto.response.ResponseHouseModel;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repository.HouseModelRepository;
import com.marksem.repository.HouseTypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class HouseModelService {
    private final HouseModelRepository houseModelRepository;
    private final HouseTypeRepository houseTypeRepository;

    public ResponseHouseModel create(RequestHouseModel hm) {
        return houseTypeRepository.findById(hm.getHouseTypeId())
                .map(ht -> houseModelRepository.save(hm.toEntity(ht)))
                .map(ResponseHouseModel::new)
                .orElseThrow(() -> new NoDataFoundException("house type", hm.getHouseTypeId()));
    }

    public ResponseHouseModel update(RequestHouseModel hm) {
        return houseModelRepository.findById(hm.getId())
                .map(i -> {
                    i.setName(hm.getName());
                    return houseModelRepository.save(i);
                })
                .map(ResponseHouseModel::new)
                .orElseThrow(() -> new NoDataFoundException("house model", hm.getId()));
    }

    public ResponseHouseModel read(Long id) {
        return houseModelRepository.findById(id)
                .map(ResponseHouseModel::new)
                .orElseThrow(() -> new NoDataFoundException("house model", id));
    }

    public List<ResponseHouseModel> readAll() {
        return houseModelRepository.findAll().stream().map(ResponseHouseModel::new).collect(Collectors.toList());
    }

    public Long delete(Long id) {
        houseModelRepository.deleteById(id);
        return id;
    }
}
