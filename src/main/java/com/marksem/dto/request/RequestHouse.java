package com.marksem.dto.request;

import lombok.*;

@Data
@AllArgsConstructor
public class RequestHouse {
    private Long id;
    private String location;
    private String equipment;
    private String area;
    private String description;
    private Double avg_rating;
}
