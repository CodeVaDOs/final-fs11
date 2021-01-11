package com.marksem.dto.request;

import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
public class RequestHouse extends BaseEntity {
    private Long id;
    private String location;
    private String equipment;
    private String area;
    private String description;
    private Double avgRating;
}
