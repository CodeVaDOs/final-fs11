package com.marksem.dto.response.statistic;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseAccessPanelUserInfo {
    private final long quantityAllHouses;
    private final long quantityOfFreeHouses;
}
