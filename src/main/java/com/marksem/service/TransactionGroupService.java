package com.marksem.service;

import com.marksem.dto.request.RequestTransactionGroup;
import com.marksem.dto.response.ResponseTransactionGroup;
import com.marksem.entity.transaction.Currency;
import com.marksem.entity.transaction.Transaction;
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

    return tg.stream()
        .map(transactionGroup -> houseRepository.findById(transactionGroup.getHouseId())
            .map(h -> {

              TransactionGroup saveTransactionGroup = transactionGroupRepository.save(
                  transactionGroup.toEntity(h, currencyConversionService
                  .convert(transactionGroup.getAmount(), transactionGroup.getCurrency(),
                      Currency.USD)));
              List<Transaction> transactionList = transactionService.create(saveTransactionGroup.getId());

              TransactionGroup transactionToUpdate = transactionGroupRepository.getOne(saveTransactionGroup.getId());
              transactionToUpdate.setTransactions(transactionList);

              return transactionGroupRepository.save(transactionToUpdate);

            })
            .map(ResponseTransactionGroup::new)
            .orElseThrow(() -> new NoDataFoundException("house", transactionGroup.getHouseId())))
        .collect(Collectors.toList());
  }


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
//    public ResponseTransactionGroup read(Long id) {
//        return transactionGroupRepository.findById(id)
//                .map(ResponseTransactionGroup::new)
//                .orElseThrow(() -> new NoDataFoundException("transaction group", id));
//    }
//
//    public PageableResponse<ResponseTransactionGroup> readAll(int page, int size) {
//        Page<TransactionGroup> groups = transactionGroupRepository.findAll(PageRequest.of(page, size));
//        return new PageableResponse<>(groups.getTotalElements(),
//                groups.getContent().stream().map(ResponseTransactionGroup::new).collect(Collectors.toList()));
//    }
//
//    public Long delete(Long id) {
//        transactionGroupRepository.deleteById(id);
//        return id;
//    }
}

