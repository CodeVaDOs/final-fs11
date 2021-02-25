package com.marksem.dto.request;

import lombok.Data;

import javax.validation.constraints.*;

@Data
public class RequestAuth {
    @NotEmpty(message = "email empty")
    @Email(message = "not email")
    private String email;

    @Size(min = 4, message = "password is too short")
    private String password;
}
