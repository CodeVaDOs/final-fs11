package com.marksem.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseAccessPanelManagerInfo {
    private final long quantityOfClients;
    private final long quantityOfContracts;
}
