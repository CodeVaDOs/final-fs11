package com.marksem.service;

import com.marksem.dto.request.RequestHouse;
import com.marksem.entity.house.House;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.HouseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HouseService {
    private final HouseRepository repo;

    public House create(RequestHouse h) {
        return repo.save(new House());
    }

    public House read(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new NoDataFoundException("house", id));
    }

    public List<House> readAll() {
        return repo.findAll();
    }

    public Long delete(Long id) {
        repo.deleteById(id);
        return id;
    }
}
