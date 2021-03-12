package com.marksem.service;

import com.marksem.entity.transaction.FinanceType;
import com.marksem.entity.transaction.Transaction;
import com.marksem.entity.transaction.TransactionGroup;
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

}

