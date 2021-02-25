package com.marksem.dto.response;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class ResponseException {
    private List<String> messages;

    public ResponseException(List<String> messages) {
        this.messages = messages;
    }

    public ResponseException(String message) {
        this.messages = new ArrayList<>();
        this.messages.add(message);
    }
}
