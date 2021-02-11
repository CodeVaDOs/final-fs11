package com.marksem.service;

import com.marksem.dto.request.RequestMessage;
import com.marksem.dto.response.ResponseMessage;
import com.marksem.entity.message.Message;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.MessageRepository;
import com.marksem.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MessageService {
    private final MessageRepository messageRepo;
    private final UserRepository userRepo;

    public ResponseMessage create(RequestMessage m) {
        return userRepo.findById(m.getFromUserId())
                .map(fu -> userRepo.findById(m.getToUserId())
                        .map(tu -> messageRepo.save(new Message(fu, tu, m.getText())))
                        .map(ResponseMessage::toDto)
                        .orElseThrow(() -> new NoDataFoundException("user", m.getToUserId())))
                .orElseThrow(() -> new NoDataFoundException("user", m.getFromUserId()));
    }

    public ResponseMessage update(RequestMessage m) {
        return messageRepo.findById(m.getId())
                .map(i -> {
                    i.setText(m.getText());
                    return messageRepo.save(i);
                })
                .map(ResponseMessage::toDto)
                .orElseThrow(() -> new NoDataFoundException("message", m.getId()));
    }

    public ResponseMessage read(Long id) {
        return messageRepo.findById(id)
                .map(ResponseMessage::toDto)
                .orElseThrow(() -> new NoDataFoundException("message", id));
    }

    public List<ResponseMessage> readAllByUser(String email) {
        return messageRepo.findByUser(email).stream().map(ResponseMessage::toDto).collect(Collectors.toList());
    }

    public Long delete(Long id) {
        messageRepo.deleteById(id);
        return id;
    }
}
