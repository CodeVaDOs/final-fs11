package com.marksem.controller;

import com.marksem.dto.request.RequestMessage;
import com.marksem.entity.message.Message;
import com.marksem.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("messages")
@RequiredArgsConstructor
public class MessageController {
    private final MessageService service;

    @GetMapping
    public List<Message> readAll() {
        return service.readAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Message> read(@PathVariable("id") Long id) {
        try {
            return ResponseEntity.ok(service.read(id));
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Message create(@RequestBody RequestMessage m) {
        return service.create(m);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
        try {
            return ResponseEntity.ok(service.delete(id));
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
