package com.marksem.entity.transaction;

import com.marksem.entity.BaseEntity;
import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="transaction_types")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionType extends BaseEntity {
    private String name;
    @Column(name = "finance_type")
    private FinanceType financeType;
}
