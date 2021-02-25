package com.marksem.dto.response;

import com.marksem.entity.transaction.TransactionGroup;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@EqualsAndHashCode(callSuper = true)
@Data
public class ResponseTransactionGroup extends BaseEntity {
    private Date fromDate;
    private Date toDate;
    private Long houseId;
    private List<ResponseTransaction> transactions;

    public ResponseTransactionGroup(TransactionGroup tg) {
        super(tg);
        this.fromDate = tg.getFromDate();
        this.toDate = tg.getToDate();
        this.houseId = tg.getHouse().getId();
        this.transactions = tg.getTransactions().stream().map(ResponseTransaction::new).collect(Collectors.toList());
    }
}
