package com.marksem.dto.request;

import lombok.Data;

import javax.validation.constraints.Email;

@Data
public class RequestResetPassword {
    @Email(message = "not email")
    private String email;
}
