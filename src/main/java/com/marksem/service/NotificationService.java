package com.marksem.service;

import com.marksem.dto.request.RequestNotification;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseNotification;
import com.marksem.entity.notification.Notification;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.NotificationRepository;
import com.marksem.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NotificationService {
    private final NotificationRepository notificationRepo;
    private final UserRepository userRepo;

    public ResponseNotification create(RequestNotification n) {
        return userRepo.findById(n.getReceiverId())
                .map(u -> notificationRepo.save(n.toEntity(u)))
                .map(ResponseNotification::toDto)
                .orElseThrow(() -> new NoDataFoundException("user", n.getReceiverId()));
    }

    public ResponseNotification update(RequestNotification n) {
        return notificationRepo.findById(n.getId())
                .map(i -> {
                    i.setText(n.getText());
                    i.setIsRead(n.getIsRead());
                    i.setImportance(n.getImportance());
                    return notificationRepo.save(i);
                })
                .map(ResponseNotification::toDto)
                .orElseThrow(() -> new NoDataFoundException("notification", n.getId()));
    }

    public ResponseNotification read(Long id) {
        return notificationRepo.findById(id)
                .map(ResponseNotification::toDto)
                .orElseThrow(() -> new NoDataFoundException("notification", id));
    }

    public PageableResponse<ResponseNotification> readAll(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Notification> notifications = notificationRepo.findAll(pageable);
        return new PageableResponse<>(notifications.getTotalElements(),
                notifications.getContent().stream().map(ResponseNotification::toDto).collect(Collectors.toList()));
    }

    public Long delete(Long id) {
        notificationRepo.deleteById(id);
        return id;
    }
}
