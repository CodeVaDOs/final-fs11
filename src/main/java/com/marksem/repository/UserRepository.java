package com.marksem.repository;

import com.marksem.entity.user.Role;
import com.marksem.entity.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    long countByManagerId(Long userId);

    Page<User> findAllByRole(Role role, Pageable pageable);
}

