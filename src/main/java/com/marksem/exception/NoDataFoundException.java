package com.marksem.exception;

public class NoDataFoundException extends RuntimeException {

    public NoDataFoundException(String entityName, Long id) {

        super(String.format("%s with Id %d not found", entityName, id));
    }
    public NoDataFoundException(String message) {

        super(message);
    }
}
