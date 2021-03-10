package com.marksem.repository;

import com.marksem.entity.user.Role;
import com.marksem.entity.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    List<User> findByManagerId(Long userId);

    Page<User> findByNameContainingIgnoreCaseAndRole(String name, Role role, Pageable pageable);

    @Query(
            value = "SELECT u.* FROM users u, houses h WHERE u.id = h.owner_id AND h.id = :id",
            nativeQuery = true)
    User getBookingOwner(Long id);
}

