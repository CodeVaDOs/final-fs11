package com.marksem.repo;

import com.marksem.entity.notification.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
    @Query(value = "SELECT * FROM notifications WHERE user_id = (SELECT id FROM users WHERE email = :email)",
            nativeQuery = true)
    List<Notification> findByUser(String email);
}
