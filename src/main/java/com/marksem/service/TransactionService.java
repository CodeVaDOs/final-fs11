package com.marksem.service;

import com.marksem.entity.transaction.Transaction;
import com.marksem.entity.transaction.TransactionGroup;
import com.marksem.repository.TransactionGroupRepository;
import com.marksem.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class TransactionService {
  private final TransactionRepository transactionRepository;

  public List<Transaction> create(TransactionGroup tg) {

    LocalDate fromDate = convertToLocalDate(tg.getFromDate());
    long daysInterval = getDaysRange(tg.getFromDate(), tg.getToDate());

    return transactionRepository.saveAll(
        Stream.iterate(0, n -> n + 1)
            .limit(daysInterval)
            .map(fromDate::plusDays)
            .map(date ->
                Transaction.builder()
                    .transactionGroup(tg)
                    .transactionType(tg.getTransactionType())
                    .amountUSDPerDay(tg.getAmountUSD() / daysInterval)
                    .date(Date.from(date
                        .atStartOfDay(ZoneId.systemDefault())
                        .toInstant()))
                    .build()).collect(Collectors.toList()));
  }

  private int getDaysRange(Date from, Date to) {
    return convertToLocalDate(to).getDayOfYear() -
        convertToLocalDate(from).getDayOfYear();
  }

  private LocalDate convertToLocalDate(Date dateToConvert) {
    return dateToConvert.toInstant()
        .atZone(ZoneId.systemDefault())
        .toLocalDate();
  }

//  public List<Transaction> getByDateRange(Date from, Date to) {
//    return this.transactionRepository.getTransactionsByRange(from, to);
//  }

  public List<Transaction> getByDate(Date date) {
    return this.transactionRepository.getAllByDate(date);
  }

//    public ResponseTransaction create(RequestTransaction t) {
//        return transactionGroupRepository.findById(t.getTransactionGroupId())
//                .map(tg -> transactionTypeRepository.findById(t.getTransactionTypeId())
//                        .map(tt -> transactionRepository
//                                .save(t.toEntity(tg, tt, currencyConversionService
//                                        .convert(t.getAmount(), t.getCurrency(), Currency.USD))))
//                        .map(ResponseTransaction::new)
//                        .orElseThrow(() -> new NoDataFoundException("transaction type", t.getTransactionTypeId())))
//                .orElseThrow(() -> new NoDataFoundException("transaction group", t.getTransactionGroupId()));
//    }
//
//    public ResponseTransaction update(RequestTransaction t) {
//        return transactionRepository.findById(t.getId())
//                .map(i -> {
//                    if (!t.getAmount().equals(i.getAmount()) || !t.getCurrency().equals(i.getCurrency())) {
//                        i.setAmount(t.getAmount());
//                        i.setCurrency(t.getCurrency());
//                        i.setAmountUSD(currencyConversionService.convert(t.getAmount(), t.getCurrency(), Currency.USD, i.getCreatedDate()));
//                    }
//                    i.setComment(t.getComment());
//                    return transactionRepository.save(i);
//                })
//                .map(ResponseTransaction::new)
//                .orElseThrow(() -> new NoDataFoundException("transaction", t.getId()));
//    }
//
//    public ResponseTransaction read(Long id) {
//        return transactionRepository.findById(id)
//                .map(ResponseTransaction::new)
//                .orElseThrow(() -> new NoDataFoundException("transaction", id));
//    }
//
//    public PageableResponse<ResponseTransaction> readAll(int page, int size) {
//        Page<Transaction> transactions = transactionRepository.findAll(PageRequest.of(page, size));
//        return new PageableResponse<>(transactions.getTotalElements(),
//                transactions.getContent().stream().map(ResponseTransaction::new).collect(Collectors.toList()));
//    }
//
//    public Long delete(Long id) {
//        transactionRepository.deleteById(id);
//        return id;
//    }
}

