package com.marksem.dto.response.statistic;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseIncome {
    int daysQuantity;

    int bookingsQuantity;

    double income;

    Period period;

    Long houseId;
}
