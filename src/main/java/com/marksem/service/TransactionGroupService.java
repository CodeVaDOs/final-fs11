package com.marksem.service;

import com.marksem.dto.request.RequestTransactionGroup;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseTransactionGroup;
import com.marksem.entity.transaction.TransactionGroup;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.HouseRepository;
import com.marksem.repo.TransactionGroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TransactionGroupService {
    private final HouseRepository houseRepo;
    private final TransactionGroupRepository transactionGroupRepo;

    public ResponseTransactionGroup create(RequestTransactionGroup tg) {
        return houseRepo.findById(tg.getHouseId())
                .map(h -> transactionGroupRepo.save(tg.toEntity(h)))
                .map(ResponseTransactionGroup::toDto)
                .orElseThrow(() -> new NoDataFoundException("house", tg.getHouseId()));
    }

    public ResponseTransactionGroup update(RequestTransactionGroup tg) {
        return transactionGroupRepo.findById(tg.getId())
                .map(i -> {
                    i.setFromDate(tg.getFromDate());
                    i.setToDate(tg.getToDate());
                    return transactionGroupRepo.save(i);
                })
                .map(ResponseTransactionGroup::toDto)
                .orElseThrow(() -> new NoDataFoundException("transaction group", tg.getId()));
    }

    public ResponseTransactionGroup read(Long id) {
        return transactionGroupRepo.findById(id)
                .map(ResponseTransactionGroup::toDto)
                .orElseThrow(() -> new NoDataFoundException("transaction group", id));
    }

    public PageableResponse<ResponseTransactionGroup> readAll(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<TransactionGroup> groups = transactionGroupRepo.findAll(pageable);
        return new PageableResponse<>(groups.getTotalElements(),
                groups.getContent().stream().map(ResponseTransactionGroup::toDto).collect(Collectors.toList()));
    }

    public Long delete(Long id) {
        transactionGroupRepo.deleteById(id);
        return id;
    }
}

