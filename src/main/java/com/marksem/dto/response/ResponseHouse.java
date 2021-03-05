package com.marksem.dto.response;

import com.marksem.entity.booking.Booking;
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
    private Long avgRating;
    private Long ownerId;
    private ResponseHouseModel houseModel;
    private List<ResponseHouseImage> houseImages;
    private List<ResponseHouseMaintenance> maintenance;
    private List<ResponseBooking> bookings;

    public ResponseHouse(House h, Long rating) {
        super(h);
        this.location = h.getLocation();
        this.equipment = h.getEquipment();
        this.area = h.getArea();
        this.description = h.getDescription();
        this.avgRating = rating;
        this.ownerId = h.getOwner().getId();
        this.houseModel = new ResponseHouseModel(h.getHouseModel());
        this.houseImages = h.getHouseImages().stream().map(ResponseHouseImage::new).collect(Collectors.toList());
        this.maintenance = h.getHouseMaintenance().stream().map(ResponseHouseMaintenance::new).collect(Collectors.toList());
    }

    public ResponseHouse(House h, Long rating, List<Booking> bookings) {
        this(h, rating);
        this.bookings = bookings.stream().map(ResponseBooking::new).collect(Collectors.toList());
    }
}
