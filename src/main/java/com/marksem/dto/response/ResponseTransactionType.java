package com.marksem.dto.response;

import com.marksem.entity.transaction.FinanceType;
import com.marksem.entity.transaction.TransactionType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseTransactionType extends BaseEntity {
    private String name;
    private FinanceType financeType;

    public static ResponseTransactionType toDto(TransactionType tt) {
        return ResponseTransactionType.builder()
                .name(tt.getName())
                .financeType(tt.getFinanceType())
                .build();
    }
}
