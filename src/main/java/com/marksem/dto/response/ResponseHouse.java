package com.marksem.dto.response;

import com.marksem.entity.house.House;
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
    private List<ResponseHouseImage> houseImages;
    private List<ResponseHouseMaintenance> maintenance;
    private List<ResponseBooking> bookings;

    public ResponseHouse(House h, boolean withBookings) {
        super(h);
        this.location = h.getLocation();
        this.equipment = h.getEquipment();
        this.area = h.getArea();
        this.description = h.getDescription();
        this.avgRating = h.getAvgRating();
        this.ownerId = h.getOwner().getId();
        this.houseModel = new ResponseHouseModel(h.getHouseModel());
        this.houseImages = h.getHouseImages().stream().map(ResponseHouseImage::new).collect(Collectors.toList());
        this.maintenance = h.getHouseMaintenance().stream().map(ResponseHouseMaintenance::new).collect(Collectors.toList());
        if (withBookings) this.bookings = h.getBookings().stream().map(b -> new ResponseBooking(b, false)).collect(Collectors.toList());
    }
}
