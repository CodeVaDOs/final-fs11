package com.marksem.controller;

import com.marksem.dto.request.RequestContact;
import com.marksem.dto.response.ResponseContact;
import com.marksem.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/documents")
@RequiredArgsConstructor
public class DocumentController {
//    private final DocumentService service;
//
//    @GetMapping
//    @PreAuthorize("hasAuthority('developers:read')")
//    public List<ResponseDocument> readAll() {
//        return service.readAll();
//    }
//
//    @GetMapping("{id}")
//    @PreAuthorize("hasAuthority('developers:read')")
//    public ResponseEntity<ResponseDocument> read(@PathVariable("id") Long id) {
//        return ResponseEntity.ok(service.read(id));
//    }

//    @PostMapping
//    @PreAuthorize("hasAuthority('developers:write')")
//    public ResponseEntity<ResponseDocument> create(@RequestBody MultiValueMap<String, String> formData) {
//        return ResponseEntity.ok(service.create(d));
//    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String postFormData(@RequestParam MultiValueMap<String, String> formData) {
        return "this is formdata" + formData;
    }

//    @PutMapping
//    @PreAuthorize("hasAuthority('developers:write')")
//    public ResponseEntity<ResponseDocument> update(@RequestBody RequestDocument d) {
//        return ResponseEntity.ok(service.update(d));
//    }
//
//    @DeleteMapping("{id}")
//    @PreAuthorize("hasAuthority('developers:write')")
//    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
//        return ResponseEntity.ok(service.delete(id));
//    }
}
