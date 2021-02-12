package com.marksem.service;

import com.marksem.dto.request.RequestContact;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseContact;
import com.marksem.entity.contact.Contact;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.ContactRepository;
import com.marksem.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ContactService {
    private final ContactRepository contactRepo;
    private final UserRepository userRepo;

    public ResponseContact create(RequestContact c) {
        return userRepo.findById(c.getUserId())
                .map(u -> contactRepo.save(c.toEntity(u)))
                .map(ResponseContact::toDto)
                .orElseThrow(() -> new NoDataFoundException("user", c.getUserId()));
    }

    public ResponseContact update(RequestContact c) {
        return contactRepo.findById(c.getId())
                .map(i -> {
                    i.setPhone(c.getPhone());
                    i.setType(c.getType());
                    return contactRepo.save(i);
                })
                .map(ResponseContact::toDto)
                .orElseThrow(() -> new NoDataFoundException("contact", c.getId()));
    }

    public ResponseContact read(Long id) {
        return contactRepo.findById(id)
                .map(ResponseContact::toDto)
                .orElseThrow(() -> new NoDataFoundException("contact", id));
    }

    public PageableResponse<ResponseContact> readAll(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Contact> contacts = contactRepo.findAll(pageable);
        return new PageableResponse<>(contacts.getTotalElements(),
                contacts.getContent().stream().map(ResponseContact::toDto).collect(Collectors.toList()));
    }

    public Long delete(Long id) {
        contactRepo.deleteById(id);
        return id;
    }
}

