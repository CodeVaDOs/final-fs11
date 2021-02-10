package com.marksem.repo;

import com.marksem.entity.house.House;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HouseRepository extends JpaRepository<House, Long> {
    long count();
}
