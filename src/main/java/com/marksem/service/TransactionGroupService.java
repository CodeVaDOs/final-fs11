package com.marksem.service;

import com.marksem.dto.request.RequestTransactionGroup;
import com.marksem.dto.response.ResponseTransactionGroup;
import com.marksem.entity.transaction.Currency;
import com.marksem.entity.transaction.FinanceType;
import com.marksem.entity.transaction.TransactionGroup;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repository.HouseRepository;
import com.marksem.repository.TransactionGroupRepository;
import lombok.RequiredArgsConstructor;
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
                        Double convert = convertAmount(requestTransactionGroup.getAmount(),
                            requestTransactionGroup.getCurrency(), requestTransactionGroup.getTransactionType());
                        TransactionGroup transactionGroupSave = requestTransactionGroup.toEntity(h, convert);
                        transactionGroupSave.setTransactions(transactionService.create(transactionGroupSave));
                        return transactionGroupRepository.save(transactionGroupSave);

                      })
                      .map(ResponseTransactionGroup::new)
                      .orElseThrow(() -> new NoDataFoundException("house", requestTransactionGroup.getHouseId())))
             .collect(Collectors.toList());
  }

  private Double convertAmount(Double amount, Currency currency, FinanceType transactionType) {
    return transactionType.equals(FinanceType.INCOME) ?
        currencyConversionService.convert(amount, currency, Currency.USD)
        : -1 * currencyConversionService.convert(amount, currency, Currency.USD);
  };

//    public ResponseTransactionGroup create(RequestTransactionGroup tg) {
//        return houseRepository.findById(tg.getHouseId())
//                .map(h -> transactionGroupRepository.save(tg.toEntity(h)))
//                .map(ResponseTransactionGroup::new)
//                .orElseThrow(() -> new NoDataFoundException("house", tg.getHouseId()));
//    }
//
//    public ResponseTransactionGroup update(RequestTransactionGroup tg) {
//        return transactionGroupRepository.findById(tg.getId())
//                .map(i -> {
//                    i.setFromDate(tg.getFromDate());
//                    i.setToDate(tg.getToDate());
//                    return transactionGroupRepository.save(i);
//                })
//                .map(ResponseTransactionGroup::new)
//                .orElseThrow(() -> new NoDataFoundException("transaction group", tg.getId()));
//    }
//
//    public Long delete(Long id) {
//        transactionGroupRepository.deleteById(id);
//        return id;
//    }
}

