package com.marksem.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class RestTemplateException extends RuntimeException {
    private String name;
    private HttpStatus status;
    private String error;

    public RestTemplateException(String name, HttpStatus status, String error) {
        super(error);
        this.name = name;
        this.status = status;
        this.error = error;
    }
}
