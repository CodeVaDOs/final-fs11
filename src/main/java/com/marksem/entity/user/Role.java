package com.marksem.entity.user;

import com.sun.tools.javac.util.List;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

public enum Role {
    USER(new HashSet<Permission>(Collections.singleton(Permission.DEVELOPERS_READ))),
    MANAGER(new HashSet<Permission>(List.of(Permission.DEVELOPERS_READ, Permission.DEVELOPERS_WRITE))),
    ADMIN(new HashSet<Permission>(List.of(Permission.DEVELOPERS_READ, Permission.DEVELOPERS_WRITE)));

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
