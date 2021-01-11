package com.marksem.entity.house;

import com.marksem.entity.BaseEntity;
import com.marksem.entity.booking.Booking;
import com.marksem.entity.document.Document;
import com.marksem.entity.transaction.TransactionGroup;
import com.marksem.entity.user.User;
import lombok.*;

import javax.persistence.*;
import java.util.*;

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

    @Column(name = "avg_rating")
    private Double avgRating;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;

    @OneToMany(mappedBy = "house")
    private List<Booking> bookings = new ArrayList<>();

    @OneToMany(mappedBy = "house")
    private List<TransactionGroup> transactionGroups = new ArrayList<>();

    @OneToMany(mappedBy = "house")
    private List<Document> documents = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "house_model_id")
    private HouseModel houseModel;
}