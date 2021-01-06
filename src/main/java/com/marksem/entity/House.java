package com.marksem.entity;

import lombok.*;
import javax.persistence.*;
import java.util.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="houses")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class House extends BaseEntity{
    private String location;
    private String equipment;
    private String area;
    private String description;
    private Double avg_rating;

    @ManyToOne
    @JoinColumn(name="owner_id")
    private User owner;

    @OneToMany(mappedBy = "house")
    private List<Booking> bookings = new ArrayList<>();

    @OneToMany(mappedBy = "house")
    private List<TransactionGroup> transaction_groups = new ArrayList<>();

    @OneToMany(mappedBy = "house")
    private List<Document> documents = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name="house_model_id")
    private HouseModel house_model;
}
