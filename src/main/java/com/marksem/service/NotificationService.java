package com.marksem.service;

import com.marksem.dto.request.RequestNotification;
import com.marksem.dto.response.ResponseNotification;
import com.marksem.entity.notification.Notification;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.NotificationRepository;
import com.marksem.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NotificationService {
    private final NotificationRepository notificationRepo;
    private final UserRepository userRepo;

    public ResponseNotification create(RequestNotification n) {
        return userRepo.findById(n.getUserId())
                .map(u -> notificationRepo.save(new Notification(n.getText(), n.getIsRead(), n.getImportance(), u)))
                .map(ResponseNotification::toDto)
                .orElseThrow(() -> new NoDataFoundException("user", n.getUserId()));
    }

    public ResponseNotification update(RequestNotification n) {
        return notificationRepo.findById(n.getId())
                .map(i->{
                    i.setText(n.getText());
                    i.setIsRead(n.getIsRead());
                    i.setImportance(n.getImportance());
                    return notificationRepo.save(i);})
                .map(ResponseNotification::toDto)
                .orElseThrow(() -> new NoDataFoundException("notification", n.getId()));
    }

    public ResponseNotification read(Long id) {
        return notificationRepo.findById(id)
                .map(ResponseNotification::toDto)
                .orElseThrow(() -> new NoDataFoundException("notification", id));
    }

    public List<ResponseNotification> readAll() {
        return notificationRepo.findAll().stream().map(ResponseNotification::toDto).collect(Collectors.toList());
    }

    public List<ResponseNotification> readAllByUser(String email) {
        return notificationRepo.findByUser(email).stream().map(ResponseNotification::toDto).collect(Collectors.toList());
    }

    public Long delete(Long id) {
        notificationRepo.deleteById(id);
        return id;
    }
}
