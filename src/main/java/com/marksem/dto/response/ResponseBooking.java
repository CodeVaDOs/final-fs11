package com.marksem.dto.response;

import lombok.*;

@Data
@AllArgsConstructor
public class ResponseBooking {
    private Long id;
    private Long from_date;
    private Long to_date;
    private String renter_photo_url;
    private Boolean isOwner;
}
