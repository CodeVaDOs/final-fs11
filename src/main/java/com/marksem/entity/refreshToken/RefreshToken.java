package com.marksem.entity.refreshToken;

import com.marksem.entity.BaseEntity;
import com.marksem.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "refresh_tokens")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RefreshToken extends BaseEntity {
    @Column(name = "expiration_date")
    private Date expirationDate;
    @Column(name = "issue_date")
    private Date issueDate;
    @Column(name = "is_used")
    private Boolean isUsed;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public RefreshToken(Long validityRefreshToken, User user) {
        Date now = new Date();
        Date validity = new Date(now.getTime() + validityRefreshToken * 1000);
        this.issueDate = now;
        this.expirationDate = validity;
        this.isUsed = false;
        this.user = user;
    }
}
