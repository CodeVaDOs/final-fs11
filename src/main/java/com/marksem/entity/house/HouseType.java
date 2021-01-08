package com.marksem.entity.house;

import com.marksem.entity.BaseEntity;
import com.marksem.entity.house.HouseModel;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="house_types")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HouseType extends BaseEntity {
    private String name;

    @OneToMany(mappedBy = "houseType")
    private List<HouseModel> houseModels = new ArrayList<>();
}
