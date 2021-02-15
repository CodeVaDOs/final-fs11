package com.marksem.dto.response;

import com.marksem.entity.transaction.FinanceType;
import com.marksem.entity.transaction.TransactionType;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class ResponseTransactionType extends BaseEntity {
    private String name;
    private FinanceType financeType;

    public ResponseTransactionType(TransactionType tt) {
        super(tt);
        this.name = tt.getName();
        this.financeType = tt.getFinanceType();
    }
}
