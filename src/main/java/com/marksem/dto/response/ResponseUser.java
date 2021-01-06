package com.marksem.dto.response;

import com.marksem.entity.*;
import lombok.*;

import java.util.*;
import java.util.stream.Collectors;

@Data
@Builder
@AllArgsConstructor
public class ResponseUser {
    private Long id;
    private String password;
    private String email;
    private Role role;
    private Long manager_id;
    private String name;
    private Long birthday;
    private String url_avatar;
    private Language language;
    private List<ResponseHouse> houses;
//    private List<ResponseContact> contacts = new ArrayList<>();
    private List<ResponseNotification> notifications;

    public static ResponseUser toDto(User u){
        return ResponseUser.builder()
                .id(u.getId())
                .password(u.getPassword())
                .email(u.getEmail())
                .role(u.getRole())
                .manager_id(u.getManager_id())
                .name(u.getName())
                .birthday(u.getBirthday())
                .url_avatar(u.getUrl_avatar())
                .language(u.getLanguage())
                .houses(u.getHouses().stream().map(ResponseHouse::toDto).collect(Collectors.toList()))
//                .contacts(u.getContacts().stream().map(ResponseContact::toDto).collect(Collectors.toList()))
                .notifications(u.getNotifications().stream().map(ResponseNotification::toDto).collect(Collectors.toList()))
                .build();
    }
}
