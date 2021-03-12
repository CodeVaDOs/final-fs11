package com.marksem.service;

import com.marksem.dto.response.ResponseStatistic;
import com.marksem.repository.TransactionGroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StatisticService {
    private final TransactionGroupRepository repository;

    public List<ResponseStatistic> readAll(Long houseId, Date fromDate, Date toDate) {
        return repository.findStatistic(houseId, fromDate, toDate);
    }
}
