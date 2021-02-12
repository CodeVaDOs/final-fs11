package com.marksem.service;

import com.marksem.dto.request.RequestUser;
import com.marksem.dto.response.ResponseUser;
import com.marksem.entity.user.User;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repo;

    public ResponseUser create(RequestUser u, String email) {
        return ResponseUser.toDto(repo.save(u.toEntity(getUserByEmail(email).getId())));
    }

    public User getUserByEmail(String email) {
        return repo.findByEmail(email).orElseThrow(() -> new NoDataFoundException("User doesn't exists"));
    }

    public ResponseUser read(Long id) {
        return repo.findById(id)
                .map(ResponseUser::toDto)
                .orElseThrow(() -> new NoDataFoundException("user", id));
    }

    public ResponseUser getProfile(String email) {
        return ResponseUser.toDto(getUserByEmail(email));
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
                    e.setName(u.getName());
                    return ResponseUser.toDto(repo.save(e));
                })
                .orElseThrow(() -> new NoDataFoundException("user", u.getId()));
    }

    public Long delete(Long id) {
        repo.deleteById(id);
        return id;
    }

}

