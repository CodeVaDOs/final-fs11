package com.marksem.dto.request;

import com.marksem.entity.transaction.Currency;
import com.marksem.entity.transaction.Transaction;
import com.marksem.entity.transaction.TransactionGroup;
import com.marksem.entity.transaction.TransactionType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotEmpty;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestTransaction extends BaseEntity {
    private Long id;
    @NotEmpty
    private Long transactionGroupId;
    private Double amount;
    private Currency currency;
    private String comment;
    private Long transactionTypeId;

    public Transaction toEntity(TransactionGroup tg, TransactionType tt) {
        return Transaction.builder()
                .transactionGroup(tg)
                .amount(this.amount)
                .currency(this.currency)
                .comment(this.comment)
                .transactionType(tt)
                .build();
    }
}
