package com.marksem.service;

import com.marksem.dto.request.RequestTransactionGroup;
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
public class TransactionGroupService {
    private final HouseRepository houseRepository;
    private final TransactionGroupRepository transactionGroupRepository;

    public ResponseTransactionGroup create(RequestTransactionGroup tg) {
        return houseRepository.findById(tg.getHouseId())
                .map(h -> transactionGroupRepository.save(tg.toEntity(h)))
                .map(ResponseTransactionGroup::new)
                .orElseThrow(() -> new NoDataFoundException("house", tg.getHouseId()));
    }

    public ResponseTransactionGroup update(RequestTransactionGroup tg) {
        return transactionGroupRepository.findById(tg.getId())
                .map(i -> {
                    i.setFromDate(tg.getFromDate());
                    i.setToDate(tg.getToDate());
                    return transactionGroupRepository.save(i);
                })
                .map(ResponseTransactionGroup::new)
                .orElseThrow(() -> new NoDataFoundException("transaction group", tg.getId()));
    }

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

    public Long delete(Long id) {
        transactionGroupRepository.deleteById(id);
        return id;
    }
}

