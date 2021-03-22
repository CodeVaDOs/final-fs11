package com.marksem.dto.request;

import com.marksem.entity.transaction.Currency;
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
    @NotEmpty
    private Double amount;
    @NotEmpty
    private Currency currency;
    private String comment;
    @NotEmpty
    private Long transactionTypeId;

//    public Transaction toEntity(TransactionGroup tg, TransactionType tt, Double amountUSD) {
//        return Transaction.builder()
//                .transactionGroup(tg)
//                .amount(this.amount)
//                .currency(this.currency)
//                .comment(this.comment)
//                .transactionType(tt)
//                .amountUSD(amountUSD)
//                .build();
//    }
}
