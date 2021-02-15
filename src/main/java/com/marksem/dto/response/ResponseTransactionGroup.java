package com.marksem.dto.response;

import com.marksem.entity.transaction.TransactionGroup;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseTransactionGroup extends BaseEntity {
    private Long id;
    private Date fromDate;
    private Date toDate;
    private Long houseId;
    private List<ResponseTransaction> transactions;

    public static ResponseTransactionGroup toDto(TransactionGroup tg) {
        return ResponseTransactionGroup.builder()
                .id(tg.getId())
                .fromDate(tg.getFromDate())
                .toDate(tg.getToDate())
                .houseId(tg.getHouse().getId())
                .transactions(tg.getTransactions().stream().map(ResponseTransaction::toDto).collect(Collectors.toList()))
                .build();
    }
}
