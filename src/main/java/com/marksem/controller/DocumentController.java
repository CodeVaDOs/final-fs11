package com.marksem.controller;

import com.marksem.dto.request.RequestDocument;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseDocument;
import com.marksem.dto.response.ResponseException;
import com.marksem.service.DocumentService;
import com.marksem.service.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api/v1/documents")
@RequiredArgsConstructor
public class DocumentController {
    private final FileService fileService;
    private final DocumentService documentService;

    @PostMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<?> create(@ModelAttribute @Valid RequestDocument doc, @RequestHeader("Authorization") String token) {
        try {
            String urlFile = fileService.upload(doc.getFile(), token);
            return ResponseEntity.ok(documentService.create(doc, urlFile));
        } catch (Exception ex) {
            return ResponseEntity
                    .status(ex.hashCode())
                    .body(new ResponseException(ex.getMessage()));
        }
    }

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<PageableResponse<ResponseDocument>> readAll(@RequestParam(defaultValue = "0") int page,
                                                                      @RequestParam(defaultValue = "10") int size,
                                                                      @RequestParam(defaultValue = "") String searchString,
                                                                      @RequestParam(defaultValue = "id") String sortBy,
                                                                      @RequestParam(defaultValue = "ASC") Sort.Direction direction) {
        return ResponseEntity.ok(documentService.readAll(page, size, searchString, direction, sortBy));
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<ResponseDocument> read(@PathVariable("id") Long id) {
        return ResponseEntity.ok(documentService.read(id));
    }

    @PutMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<?> update(@ModelAttribute RequestDocument d, @RequestHeader("Authorization") String token) {
        String urlFile = null;
        if (d.getFile() != null) {
            try {
                urlFile = fileService.update(d.getFile(), token);
            } catch (Exception ex) {
                return ResponseEntity
                        .status(ex.hashCode())
                        .body(new ResponseException(ex.getMessage()));
            }
        }
        return ResponseEntity.ok(documentService.update(d, urlFile));
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(documentService.delete(id));
    }

}
