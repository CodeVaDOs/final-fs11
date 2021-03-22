package com.marksem.entity.user;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

public enum Role {
    USER(new HashSet<>(Arrays.asList(Permission.DEVELOPERS_READ, Permission.USERS_GET_TOTAL_INFO))),
    MANAGER(new HashSet<>(Arrays.asList(Permission.DEVELOPERS_READ, Permission.DEVELOPERS_WRITE, Permission.MANAGERS_GET_TOTAL_INFO))),
    ADMIN(new HashSet<>(Arrays.asList(Permission.DEVELOPERS_READ, Permission.DEVELOPERS_WRITE, Permission.MANAGERS_GET_TOTAL_INFO)));

    private final Set<Permission> permissions;

    Role(Set<Permission> permissions) {
        this.permissions = permissions;
    }

    public Set<Permission> getPermissions() {
        return permissions;
    }

    public Set<SimpleGrantedAuthority> getAuthorities(){
        return getPermissions().stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toSet());
    }
}
