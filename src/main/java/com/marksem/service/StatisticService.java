package com.marksem.service;

import com.marksem.dto.response.ResponseHouse;
import com.marksem.dto.response.statistic.Income;
import com.marksem.dto.response.statistic.Period;
import com.marksem.dto.response.statistic.ResponseIncome;
import com.marksem.dto.response.statistic.ResponseStatistic;
import com.marksem.repository.TransactionGroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StatisticService {
    private final TransactionGroupRepository repository;
    private final UserService userService;
    private final HouseService houseService;

    public List<ResponseStatistic> readAll(String email, Long houseId, Date fromDate, Date toDate) {
        if (houseId > 0) return repository.findStatistic(houseId, fromDate, toDate);
        return repository.findManagerStatistic(userService.getUserByEmail(email).getId(), fromDate, toDate);
    }

    public List<ResponseIncome> readAllIncome(String email, Period period) {
        Date toDate = new Date();
        LocalDateTime from = LocalDateTime.now().plusDays(1);
        LocalDateTime fromDate = period == Period.YEAR ? from.minusYears(1) : period == Period.MONTH ? from.minusMonths(1) : period == Period.WEEK ? from.minusWeeks(1) : from.minusYears(50);

        List<ResponseHouse> houses = houseService.readAll(userService.getUserByEmail(email));
        return houses.parallelStream().map(h -> {
            Income countBooking = repository.countBooking(h.getId(), java.sql.Timestamp.valueOf(fromDate), toDate);
            double income = repository.countIncome(h.getId(), java.sql.Timestamp.valueOf(fromDate), toDate);
            return new ResponseIncome(countBooking.getDaysQuantity(), countBooking.getBookingsQuantity(), income, period, countBooking.getHouseId());
        }).collect(Collectors.toList());
    }

}
