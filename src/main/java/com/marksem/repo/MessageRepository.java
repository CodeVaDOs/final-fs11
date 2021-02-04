package com.marksem.repo;

import com.marksem.entity.message.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {

    @Query(value = "SELECT * FROM messages WHERE from_user_id = (SELECT id FROM users WHERE email = :email) OR to_user_id = (SELECT id FROM users WHERE email = :email)",
            nativeQuery = true)
    List<Message> findByUser(String email);
}
