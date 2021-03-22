package com.marksem.dto.response;

import java.util.Date;

public interface ResponseStatistic {
    Date getDate();

    Long getHouseId();

    double getIncome();

    double getCommunal();

    double getService();

    double getOther();
}
