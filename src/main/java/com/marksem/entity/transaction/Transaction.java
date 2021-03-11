package com.marksem.entity.transaction;

import com.marksem.entity.BaseEntity;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "transactions")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Transaction extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
    @JoinColumn(name = "transaction_group_id")
    private TransactionGroup transactionGroup;

    private Date date;

    @Enumerated(EnumType.STRING)
    private FinanceType transactionType;

    @Column(name = "amount_USD_per_Day")
    private Double amountUSDPerDay;

}
