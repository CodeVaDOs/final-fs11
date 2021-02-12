package com.marksem.service;

import com.marksem.dto.request.RequestUser;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseBooking;
import com.marksem.dto.response.ResponseUser;
import com.marksem.entity.booking.Booking;
import com.marksem.entity.user.User;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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

    public PageableResponse<ResponseUser> readAll(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<User> users = repo.findAll(pageable);
        return new PageableResponse<>(users.getTotalElements(),
                users.getContent().stream().map(ResponseUser::toDto).collect(Collectors.toList()));
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

