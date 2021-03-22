package com.marksem.entity.transaction;

import com.marksem.entity.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "transaction_types")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionType extends BaseEntity {
    private String name;
    @Column(name = "finance_type")

    @Enumerated(EnumType.STRING)
    private FinanceType financeType;
}
