package com.marksem.dto.response;

import com.marksem.entity.user.Language;
import com.marksem.entity.user.Role;
import com.marksem.entity.user.User;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@EqualsAndHashCode(callSuper = true)
@Data
public class ResponseUser extends BaseEntity {
    private Role role;
    private Long managerId;
    private String email;
    private String name;
    private Date birthday;
    private String urlAvatar;
    private Language language;
    private List<ResponseContact> contacts;
    private List<ResponseHouse> houses;
    private List<ResponseNotification> notifications;

    public ResponseUser(User u) {
        super(u);
        this.role = u.getRole();
        this.managerId = u.getManagerId();
        this.email = u.getEmail();
        this.name = u.getName();
        this.birthday = u.getBirthday();
        this.urlAvatar = u.getUrlAvatar();
        this.language = u.getLanguage();
        this.houses = u.getHouses().stream().map(ResponseHouse::new).collect(Collectors.toList());
        this.contacts = u.getContacts().stream().map(ResponseContact::new).collect(Collectors.toList());
        this.notifications = u.getNotifications().stream().map(ResponseNotification::new).collect(Collectors.toList());
    }
}
