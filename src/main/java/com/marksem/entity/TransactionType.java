package com.marksem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;

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
