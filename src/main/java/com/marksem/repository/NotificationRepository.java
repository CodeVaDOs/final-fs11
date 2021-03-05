package com.marksem.repository;

import com.marksem.entity.notification.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
    @Transactional
    @Modifying
    @Query(
            value = "INSERT INTO notifications (created_by, updated_by, created_date, updated_date, version, title, text, is_read, importance, receiver_id) values ('server', 'server', now(), now(), 0, :title, :text, false, 'MEDIUM', :receiverId)",
            nativeQuery = true)
    public void saveFromServer(String title, String text, Long receiverId);
}
