package com.marksem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="houses")
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
    private List<Transaction> transactions = new ArrayList<>();

    @OneToMany(mappedBy = "house")
    private List<Document> documents = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name="house_model_id")
    private HouseModel house_model;
}
