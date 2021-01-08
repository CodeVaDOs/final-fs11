package com.marksem.entity.notification;

import com.marksem.entity.BaseEntity;
import com.marksem.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "notifications")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Notification extends BaseEntity {
    private String text;
    private Boolean isRead;
    private Importance importance;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
