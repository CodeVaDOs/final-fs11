package com.marksem.entity.house;

import com.marksem.entity.BaseEntity;
import com.marksem.entity.booking.Booking;
import com.marksem.entity.document.Document;
import com.marksem.entity.transaction.TransactionGroup;
import com.marksem.entity.user.User;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "houses")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class House extends BaseEntity {
    private String location;
    private String equipment;
    private String area;
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id")
    private User owner;

    @OneToMany(mappedBy = "house", fetch = FetchType.LAZY)
    private List<Booking> bookings = new ArrayList<>();

    @OneToMany(mappedBy = "house", fetch = FetchType.LAZY)
    private List<TransactionGroup> transactionGroups = new ArrayList<>();

    @OneToMany(mappedBy = "house", fetch = FetchType.LAZY)
    private List<Document> documents = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "house_model_id")
    private HouseModel houseModel;

    @OneToMany(mappedBy = "house", fetch = FetchType.LAZY)
    private List<HouseImage> houseImages = new ArrayList<>();

    @OneToMany(mappedBy = "house", fetch = FetchType.LAZY)
    private List<HouseMaintenance> houseMaintenance = new ArrayList<>();
}
