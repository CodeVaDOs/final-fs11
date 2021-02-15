package com.marksem.dto.response;

import com.marksem.entity.transaction.Currency;
import com.marksem.entity.transaction.Transaction;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class ResponseTransaction extends BaseEntity {
    private Long transactionGroupId;
    private Double amount;
    private Currency currency;
    private String comment;
    private ResponseTransactionType transactionType;

    public ResponseTransaction(Transaction n) {
        super(n);
        this.transactionGroupId = n.getTransactionGroup().getId();
        this.amount = n.getAmount();
        this.currency = n.getCurrency();
        this.comment = n.getComment();
        this.transactionType = new ResponseTransactionType(n.getTransactionType());
    }
}
