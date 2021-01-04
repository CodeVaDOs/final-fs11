package com.marksem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name="contacts")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Contact extends BaseEntity{
    private String phone;

    @Enumerated(EnumType.STRING)
    private ContactType type;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
}
