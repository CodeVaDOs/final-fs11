package com.marksem.dto.request;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
public class RequestAuth {
    @NotEmpty(message = "email empty")
    @Email(message = "not email")
    private String email;

    @Size(min = 4, message = "password is too short")
    private String password;
}
