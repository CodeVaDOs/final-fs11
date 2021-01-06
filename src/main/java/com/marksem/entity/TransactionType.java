package com.marksem.entity;

import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="transaction_types")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionType extends BaseEntity{
    private String name;
    private FinanceType finance_type;
}
