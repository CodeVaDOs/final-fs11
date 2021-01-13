package com.marksem.service;

import com.marksem.dto.request.RequestMessage;
import com.marksem.entity.message.Message;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.MessageRepository;
import com.marksem.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class MessageService {
    private final MessageRepository messageRepo;
    private final UserRepository userRepo;

    public Message create(RequestMessage m) {
        return userRepo.findById(m.getFromUserId())
                .map(from -> userRepo.findById(m.getToUserId())
                        .map(to -> messageRepo.save(new Message(from, to, m.getText())))
                        .orElseThrow(() -> new NoDataFoundException("user", m.getToUserId())))
                .orElseThrow(() -> new NoDataFoundException("user", m.getFromUserId()));
    }

    public Message read(Long id) {
        return messageRepo.findById(id)
                .orElseThrow(() -> new NoDataFoundException("nessage", id));
    }

    public List<Message> readAll() {
        return messageRepo.findAll();
    }

    public Long delete(Long id) {
        messageRepo.deleteById(id);
        return id;
    }
}
