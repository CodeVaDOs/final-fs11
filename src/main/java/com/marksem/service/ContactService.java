package com.marksem.service;

import com.marksem.dto.request.RequestContact;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseContact;
import com.marksem.entity.contact.Contact;
import com.marksem.entity.user.User;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repository.ContactRepository;
import com.marksem.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ContactService {
    private final ContactRepository contactRepository;
    private final UserRepository userRepository;

    public void saveAll(List<RequestContact> contacts, User user) {
        contacts.parallelStream().forEach(c -> {
            if (c.getId() != null) update(c);
            else contactRepository.save(c.toEntity(user));
        });
    }

    public ResponseContact update(RequestContact c) {
        return contactRepository.findById(c.getId())
                .map(i -> {
                    i.setPhone(c.getPhone());
                    i.setType(c.getType());
                    return contactRepository.save(i);
                })
                .map(ResponseContact::new)
                .orElseThrow(() -> new NoDataFoundException("contact", c.getId()));
    }

    public ResponseContact read(Long id) {
        return contactRepository.findById(id)
                .map(ResponseContact::new)
                .orElseThrow(() -> new NoDataFoundException("contact", id));
    }

    public PageableResponse<ResponseContact> readAll(int page, int size) {
        Page<Contact> contacts = contactRepository.findAll(PageRequest.of(page, size));
        return new PageableResponse<>(contacts.getTotalElements(),
                contacts.getContent().stream().map(ResponseContact::new).collect(Collectors.toList()));
    }

    public Long delete(Long id) {
        contactRepository.deleteById(id);
        return id;
    }
}

