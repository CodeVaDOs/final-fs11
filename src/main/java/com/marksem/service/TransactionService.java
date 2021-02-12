package com.marksem.service;

import com.marksem.dto.request.RequestTransaction;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseTransaction;
import com.marksem.entity.transaction.Transaction;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.TransactionGroupRepository;
import com.marksem.repo.TransactionRepository;
import com.marksem.repo.TransactionTypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TransactionService {
    private final TransactionRepository transactionRepository;
    private final TransactionTypeRepository transactionTypeRepository;
    private final TransactionGroupRepository transactionGroupRepository;

    public ResponseTransaction create(RequestTransaction t) {
        return transactionGroupRepository.findById(t.getTransactionGroupId())
                .map(tg -> transactionTypeRepository.findById(t.getTransactionTypeId())
                        .map(tt -> transactionRepository.save(t.toEntity(tg, tt)))
                        .map(ResponseTransaction::toDto)
                        .orElseThrow(() -> new NoDataFoundException("transaction type", t.getTransactionTypeId())))
                .orElseThrow(() -> new NoDataFoundException("transaction group", t.getTransactionGroupId()));
    }

    public ResponseTransaction update(RequestTransaction t) {
        return transactionRepository.findById(t.getId())
                .map(i -> {
                    i.setAmount(t.getAmount());
                    i.setCurrency(t.getCurrency());
                    i.setComment(t.getComment());
                    return transactionRepository.save(i);
                })
                .map(ResponseTransaction::toDto)
                .orElseThrow(() -> new NoDataFoundException("transaction", t.getId()));
    }

    public ResponseTransaction read(Long id) {
        return transactionRepository.findById(id)
                .map(ResponseTransaction::toDto)
                .orElseThrow(() -> new NoDataFoundException("transaction", id));
    }

    public PageableResponse<ResponseTransaction> readAll(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Transaction> transactions = transactionRepository.findAll(pageable);
        return new PageableResponse<>(transactions.getTotalElements(),
                transactions.getContent().stream().map(ResponseTransaction::toDto).collect(Collectors.toList()));
    }

    public Long delete(Long id) {
        transactionRepository.deleteById(id);
        return id;
    }
}

