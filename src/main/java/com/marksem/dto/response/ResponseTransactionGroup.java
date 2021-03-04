package com.marksem.dto.response;

import com.marksem.entity.transaction.Currency;
import com.marksem.entity.transaction.TransactionGroup;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@EqualsAndHashCode(callSuper = true)
@Data
public class ResponseTransactionGroup extends BaseEntity {
    private Date fromDate;
    private Date toDate;
    private Long houseId;
    private Double amount;
    private Currency currency;
    private Double amountUSD;
    private String comment;
    private List<Object> transactions;

    public ResponseTransactionGroup(TransactionGroup tg) {
        super(tg);
        this.fromDate = tg.getFromDate();
        this.toDate = tg.getToDate();
        this.houseId = tg.getHouse().getId();
        this.amount = tg.getAmount();
        this.currency = tg.getCurrency();
        this.amountUSD = tg.getAmountUSD();
        this.comment = tg.getComment();
        this.transactions = tg.getTransactions().stream().map(ResponseTransaction::new).collect(Collectors.toList());
    }
}
