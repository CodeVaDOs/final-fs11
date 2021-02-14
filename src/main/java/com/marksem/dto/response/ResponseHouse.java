package com.marksem.dto.response;

import com.marksem.entity.house.House;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;
import java.util.stream.Collectors;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseHouse extends BaseEntity {
    private String location;
    private String equipment;
    private String area;
    private String description;
    private Double avgRating;
    private Long ownerId;
    private ResponseHouseModel houseModel;
    private List<ResponseHouseMaintenance> maintenance;
    private List<ResponseBooking> bookings;
    private List<ResponseTransactionGroup> transactionGroups;
    private List<ResponseDocument> documents;
    private List<ResponseHouseImage> houseImages;

    public static ResponseHouse toDto(House h) {
        return ResponseHouse.builder()
                .location(h.getLocation())
                .equipment(h.getEquipment())
                .area(h.getArea())
                .description(h.getDescription())
                .avgRating(h.getAvgRating())
                .ownerId(h.getOwner().getId())
                .houseModel(ResponseHouseModel.toDto(h.getHouseModel()))
                .maintenance(h.getHouseMaintenance().stream().map(ResponseHouseMaintenance::toDto).collect(Collectors.toList()))
                .bookings(h.getBookings().stream().map(ResponseBooking::toDto).collect(Collectors.toList()))
                .transactionGroups(h.getTransactionGroups().stream().map(ResponseTransactionGroup::toDto).collect(Collectors.toList()))
                .documents(h.getDocuments().stream().map(ResponseDocument::toDto).collect(Collectors.toList()))
                .houseImages(h.getHouseImages().stream().map(ResponseHouseImage::toDto).collect(Collectors.toList()))
                .build();
    }
}
