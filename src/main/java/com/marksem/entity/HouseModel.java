package com.marksem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="house_models")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HouseModel extends BaseEntity{
    private String name;

    @ManyToOne
    @JoinColumn(name="house_type_id")
    private HouseType house_type;
}
