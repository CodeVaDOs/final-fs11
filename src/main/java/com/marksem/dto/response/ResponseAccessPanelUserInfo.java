package com.marksem.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseAccessPanelUserInfo {
    private final long quantityAllHouses;
    private final long quantityOfFreeHouses;
}
