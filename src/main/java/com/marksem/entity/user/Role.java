package com.marksem.entity.user;

import java.util.*;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.stream.Collectors;

public enum Role {
    USER(new HashSet<>(Collections.singletonList(Permission.DEVELOPERS_READ))),
    MANAGER(new HashSet<>(Arrays.asList(Permission.DEVELOPERS_READ, Permission.DEVELOPERS_WRITE))),
    ADMIN(new HashSet<>(Arrays.asList(Permission.DEVELOPERS_READ, Permission.DEVELOPERS_WRITE)));

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
