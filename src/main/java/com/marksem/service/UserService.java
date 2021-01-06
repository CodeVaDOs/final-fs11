package com.marksem.service;

import com.marksem.dto.request.RequestUser;
import com.marksem.dto.response.ResponseUser;
import com.marksem.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repo;

    public ResponseUser create(RequestUser u){
        return ResponseUser.toDto(repo.save(u.toEntity()));
    }

    public ResponseUser read(Long id){
        return repo.findById(id)
                .map(ResponseUser::toDto)
                .orElseThrow(NoSuchElementException::new);
    }

    public List<ResponseUser> readAll(){
        return repo.findAll().stream().map(ResponseUser::toDto).collect(Collectors.toList());
    }

    public ResponseUser update(RequestUser u) {
        return repo.findById(u.getId())
                .map(e -> {
                    e.setPassword(u.getPassword());
                    e.setEmail(u.getEmail());
                    e.setRole(u.getRole());
                    return ResponseUser.toDto(repo.save(e));
                })
                .orElseThrow(NoSuchElementException::new);
    }

    public Long delete(Long id){
        repo.deleteById(id);
        return id;
    }
}

