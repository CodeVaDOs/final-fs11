package com.marksem.controller;

import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseTransactionGroup;
import com.marksem.service.StatisticService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/statistic")
@RequiredArgsConstructor
public class StatisticController {
    private final StatisticService service;

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<PageableResponse<ResponseTransactionGroup>> readAll(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(service.readAll(page, size));
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<ResponseTransactionGroup> read(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.read(id));
    }
}
