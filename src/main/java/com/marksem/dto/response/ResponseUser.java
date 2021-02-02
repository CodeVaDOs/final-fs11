package com.marksem.dto.response;

import com.marksem.entity.user.Language;
import com.marksem.entity.user.Role;
import com.marksem.entity.user.User;
import lombok.*;

import java.util.*;
import java.util.stream.Collectors;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
public class ResponseUser extends BaseEntity {
    private Long id;
    private Role role;
    private Long managerId;
    private String name;
    private Long birthday;
    private String urlAvatar;
    private Language language;
    private List<ResponseHouse> houses;
    private List<ResponseContact> contacts;
    private List<ResponseNotification> notifications;

    public static ResponseUser toDto(User u) {
        return ResponseUser.builder()
                .id(u.getId())
                .role(u.getRole())
                .managerId(u.getManagerId())
                .name(u.getName())
                .birthday(u.getBirthday())
                .urlAvatar(u.getUrlAvatar())
                .language(u.getLanguage())
                .houses(u.getHouses().stream().map(ResponseHouse::toDto).collect(Collectors.toList()))
                .contacts(u.getContacts().stream().map(ResponseContact::toDto).collect(Collectors.toList()))
                .notifications(u.getNotifications().stream().map(ResponseNotification::toDto).collect(Collectors.toList()))
                .build();
    }
}
