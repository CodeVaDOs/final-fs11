package com.marksem.controller;

import com.marksem.dto.request.RequestUser;
import com.marksem.dto.response.ResponseUser;
import com.marksem.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import javax.validation.Valid;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("users")
@RequiredArgsConstructor
public class UserController {
    private final UserService service;

    @PostMapping
    public ResponseEntity<ResponseUser> create(@Valid @RequestBody RequestUser u) {
        return ResponseEntity.ok(service.create(u));
    }

    @GetMapping
    public List<ResponseUser> readAll() {
        return service.readAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<ResponseUser> read(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.read(id));
    }

    @PutMapping()
    public ResponseEntity<ResponseUser> update(@RequestBody @Valid RequestUser u) {
        return ResponseEntity.ok(service.update(u));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.delete(id));
    }

}
