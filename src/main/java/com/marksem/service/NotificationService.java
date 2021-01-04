//package com.marksem.service;
//
//import com.marksem.entity.Notification;
//import com.marksem.repo.NotificationRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.NoSuchElementException;
//
//@Service
//@RequiredArgsConstructor
//public class NotificationService {
//    private final NotificationRepository repo;
//
//    public Notification read(Long id){
//        return repo.findById(id).orElseThrow(NoSuchElementException::new);
//    }
//
//    public List<Notification> readAll(){
//        return repo.findAll();
//    }
//
//    public Long delete(Long id){
//        repo.deleteById(id);
//        return id;
//    }
//}
