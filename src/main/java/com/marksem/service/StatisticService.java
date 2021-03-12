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
    private final UserService userService;

    public List<ResponseStatistic> readAll(String email, Long houseId, Date fromDate, Date toDate) {
        if (houseId > 0) return repository.findStatistic(houseId, fromDate, toDate);
        return repository.findManagerStatistic(userService.getUserByEmail(email).getId(), fromDate, toDate);
    }
}
