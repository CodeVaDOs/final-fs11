package com.marksem.entity.user;

public enum Permission {
    DEVELOPERS_READ("developers:read"),
    DEVELOPERS_WRITE("developers:write"),
    USERS_GET_TOTAL_INFO("users:get_total_info"),
    MANAGERS_GET_TOTAL_INFO("managers:get_total_info");

    private final String permission;

    Permission(String permission){
        this.permission = permission;
    }

    public String getPermission() {
        return permission;
    }
}
