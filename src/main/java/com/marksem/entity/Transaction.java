package com.marksem.entity;

import lombok.*;
import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="transactions")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Transaction extends BaseEntity{
    @ManyToOne
    @JoinColumn(name = "transaction_group_id")
    private TransactionGroup transaction_group;

    private Double amount;
    private Double amount_USD;
    private Currency currency;
    private String comment;

    @ManyToOne
    @JoinColumn(name = "transaction_type_id")
    private TransactionType transaction_type;
}
