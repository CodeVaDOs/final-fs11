package com.marksem.entity;

import lombok.*;
import javax.persistence.*;
import java.util.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="transaction_groups")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionGroup extends BaseEntity{
    private Long from_date;
    private Long to_date;

    @ManyToOne
    @JoinColumn(name="house_id")
    private House house;

    @OneToMany(mappedBy = "transaction_group")
    private List<Transaction> transactions = new ArrayList<>();
}
