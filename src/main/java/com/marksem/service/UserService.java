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
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
        String urlAvatar = u.getAvatar() != null ? fileService.upload(u.getAvatar(), token) : null;

        String text = "<p>Ваш пароль для входа в MARKSEM CRM :</p>" + u.getPassword();
        messageService.send(u.getEmail(), "user creation", text);

        return save(u, getUserByEmail(manager).getId(), urlAvatar);
    }

    public ResponseUser save(RequestUser u, Long managerId, String urlAvatar) {
        User saved = repository.save(u.toEntity(managerId, urlAvatar));
        if (u.getContacts() != null) contactService.saveAll(u.getContacts(), saved);
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
        ResponseUser user = new ResponseUser(getUserByEmail(email));
        repository.findById(user.getManagerId()).ifPresent(manager -> user.setManager(new ResponseUser(manager)));
        return user;

    }

    public PageableResponse<ResponseUser> readAll(int page, int size, Role role, String searchString, Sort.Direction direction, String sortBy) {
        Page<User> users = repository.findByNameContainingIgnoreCaseAndRole(searchString, role, PageRequest.of(page, size, direction, sortBy));
        return new PageableResponse<>(users.getTotalElements(),
                users.getContent().stream().map(ResponseUser::new).collect(Collectors.toList()));
    }

    public ResponseUser update(RequestUser ru, String token) {
        String url = (ru.getAvatar() != null) ? fileService.update(ru.getAvatar(), token) : null;

        return repository.findById(ru.getId())
                .map(user -> {
                    User u = ru.update(user, url);
                    User saved = repository.save(u);
                    contactService.saveAll(ru.getContacts(), u);
                    return new ResponseUser(saved);
                })
                .orElseThrow(() -> new NoDataFoundException("user", ru.getId()));
    }

    public ResponseUser changePassword(User user, String password) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);
        user.setPassword(bCryptPasswordEncoder.encode(password));
        return new ResponseUser(repository.save(user));
    }

    public Long delete(Long id) {
        repository.deleteById(id);
        return id;
    }

}

