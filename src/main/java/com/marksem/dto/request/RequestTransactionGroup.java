package com.marksem.dto.request;

import com.marksem.entity.house.House;
import com.marksem.entity.transaction.Currency;
import com.marksem.entity.transaction.FinanceType;
import com.marksem.entity.transaction.TransactionGroup;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestTransactionGroup extends BaseEntity {
  private Long id;
  @DateTimeFormat(pattern = "yyyy-MM-dd")
  private Date fromDate;

  @DateTimeFormat(pattern = "yyyy-MM-dd")
  private Date toDate;

  @NotEmpty
  private Long houseId;

  @NotEmpty
  private FinanceType transactionType;

  @NotEmpty
  private Double amount;

  @NotEmpty
  private Currency currency;

  private String comment;

  public TransactionGroup toEntity(House house, Double amountUSD) {
    return TransactionGroup.builder()
        .fromDate(this.fromDate)
        .toDate(this.toDate)
        .amount(this.amount)
        .amountUSD(amountUSD)
        .currency(this.currency)
        .comment(this.comment)
        .transactions(new ArrayList<>())
        .house(house)
        .transactionType(transactionType)
        .build();
  }
}
