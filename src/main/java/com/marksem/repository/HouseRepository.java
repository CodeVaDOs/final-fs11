package com.marksem.repository;

import com.marksem.entity.house.House;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HouseRepository extends JpaRepository<House, Long> {
    long count();

    List<House> findByOwnerId(Long id);

    @Query(
            value = "SELECT h.* FROM users u, houses h WHERE u.id = h.owner_id AND (u.manager_id = :id OR h.owner_id = :id)",
            nativeQuery = true)
    List<House> findByManager(@Param("id") Long id);
}
