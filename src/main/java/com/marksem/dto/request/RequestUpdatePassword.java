package com.marksem.dto.request;

import lombok.Data;

import javax.validation.constraints.Size;

@Data
public class RequestUpdatePassword {
    @Size(min = 4, message = "password is too short")
    private String password;
}
