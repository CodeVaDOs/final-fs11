package com.marksem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(exclude="contacts", callSuper = true)
@Entity
@Table(name="users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseEntity{
    private Long manager_id;
    private String name;
    private Long birthday;
    private String password;
    private String email;
    private String url_avatar;

    @Enumerated(EnumType.STRING)
    private Language language;

    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "owner")
    private List<House> houses = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<Contact> contacts = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<Notification> notifications = new ArrayList<>();

    public User(String email, String password, Role role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
