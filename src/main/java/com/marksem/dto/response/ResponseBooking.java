package com.marksem.dto.response;

import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class ResponseBooking extends BaseEntity{
    private Long fromDate;
    private Long toDate;
    private String renterPhotoUrl;
    private Boolean isOwner;
}
