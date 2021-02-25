package com.marksem.dto.request;

import com.marksem.entity.house.House;
import com.marksem.entity.transaction.TransactionGroup;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestTransactionGroup extends BaseEntity {
    private Long id;
    @NotEmpty
    private Date fromDate;

    @NotEmpty
    private Date toDate;

    @NotEmpty
    private Long houseId;

    public TransactionGroup toEntity(House h) {
        return TransactionGroup.builder()
                .fromDate(this.fromDate)
                .toDate(this.toDate)
                .transactions(new ArrayList<>())
                .house(h)
                .build();
    }
}
