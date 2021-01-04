package com.marksem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="messages")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Message extends BaseEntity{
    @ManyToOne
    @JoinColumn(name="from_user_id")
    private User from_user;
    @ManyToOne
    @JoinColumn(name="to_user_id")
    private User to_user;
    private String text;
}
