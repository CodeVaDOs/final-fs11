package com.marksem.service;

import com.marksem.dto.request.RequestUser;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseUser;
import com.marksem.entity.user.Role;
import com.marksem.entity.user.User;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repository;
    private final MessageService messageService;
    private final ContactService contactService;
    private final FileService fileService;

    public ResponseUser create(RequestUser u, String manager, String token) {
        String urlAvatar = null;
        if (u.getAvatar() != null) urlAvatar = fileService.upload(u.getAvatar(), token);
        User saved = repository.save(u.toEntity(getUserByEmail(manager).getId(), urlAvatar));

        if (u.getContacts() != null) contactService.saveAll(u.getContacts(), saved);

        String text = "<p>Ваш пароль для входа в MARKSEM CRM :</p>" + u.getPassword();
        messageService.send(u.getEmail(), "user creation", text);

        return new ResponseUser(saved);
    }

    public User getUserByEmail(String email) {
        return repository.findByEmail(email).orElseThrow(() -> new NoDataFoundException("User doesn't exists"));
    }

    public ResponseUser read(Long id) {
        return repository.findById(id)
                .map(ResponseUser::new)
                .orElseThrow(() -> new NoDataFoundException("user", id));
    }

    public ResponseUser getProfile(String email) {
        return new ResponseUser(getUserByEmail(email));
    }

    public PageableResponse<ResponseUser> readAll(int page, int size, Role role, String searchString, Sort.Direction direction, String sortBy) {
        Page<User> users = repository.findByNameContainingIgnoreCaseAndRole(searchString, role, PageRequest.of(page, size, direction, sortBy));
        return new PageableResponse<>(users.getTotalElements(),
                users.getContent().stream().map(ResponseUser::new).collect(Collectors.toList()));
    }

    public ResponseUser update(RequestUser u, String token) {
        return repository.findById(u.getId())
                .map(e -> {
                    if (u.getAvatar() != null) e.setUrlAvatar(fileService.update(u.getAvatar(), token));
                    e.setEmail(u.getEmail());
                    e.setRole(u.getRole());
                    e.setName(u.getName());
                    return new ResponseUser(repository.save(e));
                })
                .orElseThrow(() -> new NoDataFoundException("user", u.getId()));
    }

    public Long delete(Long id) {
        repository.deleteById(id);
        return id;
    }

}

