package com.marksem.service;

import com.marksem.dto.request.RequestUser;
import com.marksem.dto.response.ResponseUser;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.UserRepository;
import com.marksem.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repo;
    private final JwtTokenProvider jwtTokenProvider;

    public ResponseUser create(RequestUser u) {
        return ResponseUser.toDto(repo.save(u.toEntity()));
    }

    public ResponseUser read(Long id) {
        return repo.findById(id)
                .map(ResponseUser::toDto)
                .orElseThrow(() ->  new NoDataFoundException("user", id));
    }

    public ResponseUser read(String token) {
        String email = jwtTokenProvider.getUsername(token);
        return repo.findByEmail(email)
                .map(ResponseUser::toDto)
                .orElseThrow(() ->  new NoDataFoundException(String.format("User with email %s doesn't exists", email)));
    }

    public List<ResponseUser> readAll() {
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
                .orElseThrow(() ->  new NoDataFoundException("user", u.getId()));
    }

    public Long delete(Long id) {
        repo.deleteById(id);
        return id;
    }
}

