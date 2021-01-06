package com.marksem.entity;

import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import javax.persistence.*;
import java.util.*;

@EqualsAndHashCode(exclude="contacts", callSuper = true)
@Entity
@Table(name="users")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseEntity{
    private String password;
    private String email;
    private Long manager_id;
    private String name;
    private Long birthday;
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
}
