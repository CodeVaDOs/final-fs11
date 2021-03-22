package com.marksem.dto.response.statistic;

public interface Income {
    int getDaysQuantity();

    int getBookingsQuantity();

    double getIncome();

    Period getPeriod();

    Long getHouseId();
}
