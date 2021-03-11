package com.marksem.dto.response;

import com.marksem.entity.transaction.Currency;
import com.marksem.entity.transaction.FinanceType;
import com.marksem.entity.transaction.Transaction;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Data
public class ResponseTransaction extends BaseEntity {
    private Long transactionGroupId;
    private Date date;
    private Double amountUSDPerDay;
    private FinanceType transactionType;

    public ResponseTransaction(Transaction t) {
        super(t);
        this.transactionGroupId = t.getTransactionGroup().getId();
        this.amountUSDPerDay = t.getAmountUSDPerDay();
        this.date = t.getDate();
        this.transactionType = t.getTransactionType();
    }
}
