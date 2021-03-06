package com.marksem.service;

import com.marksem.dto.request.RequestTransactionGroup;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseTransactionGroup;
import com.marksem.entity.transaction.Currency;
import com.marksem.entity.transaction.TransactionGroup;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repository.HouseRepository;
import com.marksem.repository.TransactionGroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TransactionGroupService {
    private final HouseRepository houseRepository;
    private final TransactionGroupRepository transactionGroupRepository;
    private final CurrencyConversionService currencyConversionService;
    private final TransactionService transactionService;

    public List<ResponseTransactionGroup> create(List<RequestTransactionGroup> tg) {

        return tg.parallelStream()
                .map(requestTransactionGroup ->
                        houseRepository
                                .findById(requestTransactionGroup.getHouseId())
                                .map(h -> {
                                    Double convert = currencyConversionService.convert(requestTransactionGroup.getAmount(),
                                            requestTransactionGroup.getCurrency(),
                                            Currency.USD);
                                    TransactionGroup transactionGroupSave = requestTransactionGroup.toEntity(h, convert);
                                    transactionGroupSave.setTransactions(transactionService.create(transactionGroupSave));
                                    return transactionGroupRepository.save(transactionGroupSave);

                                })
                                .map(ResponseTransactionGroup::new)
                                .orElseThrow(() -> new NoDataFoundException("house", requestTransactionGroup.getHouseId())))
                .collect(Collectors.toList());
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
}

