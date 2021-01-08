package com.marksem.dto.request;

import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestBooking extends BaseEntity {
    private Long id;
    private Long fromDate;
    private Long toDate;
    private String renterPhotoUrl;
    private Boolean isOwner;
}
