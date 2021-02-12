package com.marksem.repo;

import com.marksem.entity.house.HouseType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HouseTypeRepository extends JpaRepository<HouseType, Long> {
}
