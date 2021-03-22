package com.marksem.controller;

import com.marksem.dto.response.statistic.Period;
import com.marksem.dto.response.statistic.ResponseIncome;
import com.marksem.dto.response.statistic.ResponseStatistic;
import com.marksem.service.StatisticService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("api/v1/statistic")
@RequiredArgsConstructor
public class StatisticController {
    private final StatisticService service;

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<List<ResponseStatistic>> readAll(@RequestParam(defaultValue = "0") long houseId,
                                                           @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") Date fromDate,
                                                           @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") Date toDate,
                                                           Principal principal) {
        return ResponseEntity.ok(service.readAll(principal.getName(), houseId, fromDate, toDate));
    }

    @GetMapping("income")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<List<ResponseIncome>> readAllIncome(@RequestParam(defaultValue = "ALWAYS") Period period,
                                                              Principal principal) {
        return ResponseEntity.ok(service.readAllIncome(principal.getName(), period));
    }
}
