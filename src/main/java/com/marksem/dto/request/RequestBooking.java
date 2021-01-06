package com.marksem.dto.request;

import lombok.*;

@Data
@AllArgsConstructor
public class RequestBooking {
    private Long id;
    private Long from_date;
    private Long to_date;
    private String renter_photo_url;
    private Boolean isOwner;
}
