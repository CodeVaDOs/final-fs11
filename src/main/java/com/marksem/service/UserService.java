package com.marksem.service;

import com.marksem.dto.request.RequestUser;
import com.marksem.entity.User;
import com.marksem.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repo;

    public User create(RequestUser u){
        return repo.save(new User(u.getEmail(), u.getPassword(), u.getRole()));
    }

    public User read(Long id){
        return repo.findById(id).orElseThrow(NoSuchElementException::new);
    }

    public List<User> readAll(){
        return repo.findAll();
    }

    public Long delete(Long id){
        repo.deleteById(id);
        return id;
    }
}

