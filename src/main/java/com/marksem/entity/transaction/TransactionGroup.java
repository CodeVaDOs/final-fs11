package com.marksem.entity.transaction;

import com.marksem.entity.BaseEntity;
import com.marksem.entity.house.House;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "transaction_groups")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TransactionGroup extends BaseEntity {
    @Column(name = "from_date")
    private Date fromDate;

    @Column(name = "to_date")
    private Date toDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "house_id")
    private House house;

    @OneToMany(mappedBy = "transactionGroup", fetch = FetchType.LAZY)
    private List<Transaction> transactions = new ArrayList<>();
}
