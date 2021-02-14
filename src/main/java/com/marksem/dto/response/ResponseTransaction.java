package com.marksem.dto.response;

import com.marksem.entity.transaction.Currency;
import com.marksem.entity.transaction.Transaction;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseTransaction extends BaseEntity {

    private Long transactionGroupId;
    private Double amount;
    private Currency currency;
    private String comment;
    private ResponseTransactionType transactionType;

    public static ResponseTransaction toDto(Transaction n) {
        return ResponseTransaction.builder()
                .transactionGroupId(n.getTransactionGroup().getId())
                .amount(n.getAmount())
                .currency(n.getCurrency())
                .comment(n.getComment())
                .transactionType(ResponseTransactionType.toDto(n.getTransactionType()))
                .build();
    }
}
