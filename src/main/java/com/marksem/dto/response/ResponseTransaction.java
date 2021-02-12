package com.marksem.dto.response;

import com.marksem.entity.notification.Importance;
import com.marksem.entity.notification.Notification;
import com.marksem.entity.transaction.Currency;
import com.marksem.entity.transaction.Transaction;
import com.marksem.entity.transaction.TransactionGroup;
import com.marksem.entity.transaction.TransactionType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseTransaction extends BaseEntity {

    private TransactionGroup transactionGroup;
    private Double amount;
    private Currency currency;
    private String comment;
    private TransactionType transactionType;

    public static ResponseTransaction toDto(Transaction n) {
        return ResponseTransaction.builder()
                .transactionGroup(n.getTransactionGroup())
                .amount(n.getAmount())
                .currency(n.getCurrency())
                .comment(n.getComment())
                .transactionType(n.getTransactionType())
                .build();
    }
}
