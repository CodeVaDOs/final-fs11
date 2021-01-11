package com.marksem.entity.transaction;

import com.marksem.entity.BaseEntity;
import com.marksem.entity.house.House;
import lombok.*;

import javax.persistence.*;
import java.util.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "transaction_groups")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionGroup extends BaseEntity {
    @Column(name = "from_date")
    private Long fromDate;

    @Column(name = "to_date")
    private Long toDate;

    @ManyToOne
    @JoinColumn(name = "house_id")
    private House house;

    @OneToMany(mappedBy = "transactionGroup")
    private List<Transaction> transactions = new ArrayList<>();
}
