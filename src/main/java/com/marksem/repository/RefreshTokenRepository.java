package com.marksem.repository;

import com.marksem.entity.refreshToken.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    public void deleteByExpirationDateBefore(Date date);
}
