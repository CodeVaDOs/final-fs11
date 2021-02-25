package com.marksem.entity.transaction;

import com.marksem.entity.BaseEntity;
import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "transactions")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Transaction extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "transaction_group_id")
    private TransactionGroup transactionGroup;

    private Double amount;

    @Column(name = "amount_USD")
    private Double amountUSD;

    @Enumerated(EnumType.STRING)
    private Currency currency;

    private String comment;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "transaction_type_id")
    private TransactionType transactionType;
}
