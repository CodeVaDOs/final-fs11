package com.marksem.service;
//
//import com.marksem.dto.request.RequestMessage;
//import com.marksem.dto.response.ResponseMessage;
//import com.marksem.entity.Message;
//import com.marksem.repo.MessageRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.NoSuchElementException;
//
//@Service
//@RequiredArgsConstructor
//public class MessageService {
//    private final MessageRepository repo;
//
//    public Message read(Long id){
//        return repo.findById(id).orElseThrow(NoSuchElementException::new);
//    }
//
//    public List<Message> readAll(){
//        return repo.findAll();
//    }
//
//    public Long delete(Long id){
//        repo.deleteById(id);
//        return id;
//    }
//}
