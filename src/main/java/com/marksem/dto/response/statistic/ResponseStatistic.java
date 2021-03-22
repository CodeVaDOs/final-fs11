package com.marksem.dto.response.statistic;

import java.util.Date;

public interface ResponseStatistic {
    Date getDate();

    Long getHouseId();

    double getIncome();

    double getCommunal();

    double getService();

    double getOther();
}
