package com.marksem.dto.request;

import lombok.Data;

@Data
public class RequestAuth {
    private String email;
    private String password;
}
