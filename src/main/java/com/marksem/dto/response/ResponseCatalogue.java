package com.marksem.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ResponseCatalogue {
    private List<String> roleType;
    private List<String> contactType;
    private List<String> documentType;
    private List<String> bookingMaintenanceType;
    private List<String> houseMaintenanceType;
    private List<String> notificationImportanceType;
    private List<String> currencyType;
    private List<String> financeType;
    private List<String> languageType;
}
