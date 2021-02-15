package com.marksem.dto.response;

import com.marksem.entity.house.House;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;
import java.util.stream.Collectors;

@EqualsAndHashCode(callSuper = true)
@Data
public class ResponseHouse extends BaseEntity {
    private String location;
    private String equipment;
    private String area;
    private String description;
    private Double avgRating;
    private Long ownerId;
    private ResponseHouseModel houseModel;

//    private List<ResponseHouseImage> houseImages;
//    private List<ResponseHouseMaintenance> maintenance;
//    private List<ResponseBooking> bookings;
//    private List<ResponseTransactionGroup> transactionGroups;
//    private List<ResponseDocument> documents;

    public ResponseHouse(House h) {
        super(h);
        this.location = h.getLocation();
        this.equipment = h.getEquipment();
        this.area = h.getArea();
        this.description = h.getDescription();
        this.avgRating = h.getAvgRating();
        this.ownerId = h.getOwner().getId();
        this.houseModel = new ResponseHouseModel(h.getHouseModel());

//        this.houseImages = h.getHouseImages().stream().map(ResponseHouseImage::new).collect(Collectors.toList());
//        this.maintenance = h.getHouseMaintenance().stream().map(ResponseHouseMaintenance::new).collect(Collectors.toList());
//        this.bookings = h.getBookings().stream().map(ResponseBooking::new).collect(Collectors.toList());
//        this.transactionGroups = h.getTransactionGroups().stream().map(ResponseTransactionGroup::new).collect(Collectors.toList());
//        this.documents = h.getDocuments().stream().map(ResponseDocument::new).collect(Collectors.toList());
    }
}
