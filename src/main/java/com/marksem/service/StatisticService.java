package com.marksem.service;

import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseTransactionGroup;
import com.marksem.entity.transaction.TransactionGroup;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repository.HouseRepository;
import com.marksem.repository.TransactionGroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StatisticService {
    private final TransactionGroupRepository transactionGroupRepository;

    public ResponseTransactionGroup read(Long id) {
        return transactionGroupRepository.findById(id)
                .map(ResponseTransactionGroup::new)
                .orElseThrow(() -> new NoDataFoundException("transaction group", id));
    }

    public PageableResponse<ResponseTransactionGroup> readAll(int page, int size) {
        Page<TransactionGroup> groups = transactionGroupRepository.findAll(PageRequest.of(page, size));
        return new PageableResponse<>(groups.getTotalElements(),
                groups.getContent().stream().map(ResponseTransactionGroup::new).collect(Collectors.toList()));
    }
}
