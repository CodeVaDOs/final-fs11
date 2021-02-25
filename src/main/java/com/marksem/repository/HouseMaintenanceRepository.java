package com.marksem.repository;

import com.marksem.entity.house.HouseMaintenance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HouseMaintenanceRepository extends JpaRepository<HouseMaintenance, Long> {
}
