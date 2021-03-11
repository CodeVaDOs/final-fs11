package com.marksem.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ResponseAccessPanelManagerInfo {
    private final List<ResponseUser> clients;
    private final long quantityOfContracts;
}
