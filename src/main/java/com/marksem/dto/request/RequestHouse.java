package com.marksem.dto.request;

import com.marksem.entity.house.House;
import com.marksem.entity.house.HouseModel;
import com.marksem.entity.user.User;
import lombok.*;

import java.util.ArrayList;

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
    private Long ownerId;
    private Long houseModelId;

    public House toEntity(User u, HouseModel hm) {
        return House.builder()
                .location(this.location)
                .equipment(this.equipment)
                .area(this.area)
                .description(this.description)
                .avgRating(this.avgRating)
                .owner(u)
                .houseModel(hm)
                .bookings(new ArrayList<>())
                .transactionGroups(new ArrayList<>())
                .documents(new ArrayList<>())
                .build();
    }
}
