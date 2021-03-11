package com.marksem.service;

import com.marksem.dto.request.RequestNotification;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseNotification;
import com.marksem.entity.notification.Notification;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repository.NotificationRepository;
import com.marksem.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NotificationService {
    private final NotificationRepository notificationRepository;
    private final UserRepository userRepository;

    public List<ResponseNotification> create(RequestNotification n) {
        return n.getReceivers()
                .stream()
                .map(id -> saveOne(n, id))
                .collect(Collectors.toList());
    }

    public ResponseNotification saveOne(RequestNotification n, Long id) {
        return userRepository.findById(id)
                .map(u -> notificationRepository.save(n.toEntity(u)))
                .map(ResponseNotification::new)
                .orElseThrow(() -> new NoDataFoundException("user", id));
    }
    public ResponseNotification update(RequestNotification n) {
        return notificationRepository.findById(n.getId())
                .map(i -> {
                    i.setTitle(n.getTitle());
                    i.setText(n.getText());
                    i.setIsRead(n.getIsRead());
                    i.setImportance(n.getImportance());
                    return notificationRepository.save(i);
                })
                .map(ResponseNotification::new)
                .orElseThrow(() -> new NoDataFoundException("notification", n.getId()));
    }

    public ResponseNotification read(Long id) {
        return notificationRepository.findById(id)
                .map(ResponseNotification::new)
                .orElseThrow(() -> new NoDataFoundException("notification", id));
    }

    public PageableResponse<ResponseNotification> readAll(int page, int size) {
        Page<Notification> notifications = notificationRepository.findAll(PageRequest.of(page, size));
        return new PageableResponse<>(notifications.getTotalElements(),
                notifications.getContent().stream().map(ResponseNotification::new).collect(Collectors.toList()));
    }

    public Long delete(Long id) {
        notificationRepository.deleteById(id);
        return id;
    }
}
