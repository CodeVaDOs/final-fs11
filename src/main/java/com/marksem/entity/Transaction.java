package com.marksem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="transactions")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Transaction extends BaseEntity{
    @ManyToOne
    @JoinColumn(name="house_id")
    private House house;

    private Double amount;
    private Double amountUSD;
    private Currency currency;

    @ManyToOne
    @JoinColumn(name = "transaction_type_id")
    private TransactionType transaction_type;
}
