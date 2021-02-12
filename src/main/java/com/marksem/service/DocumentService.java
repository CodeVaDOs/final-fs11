package com.marksem.service;

import com.marksem.dto.request.RequestDocument;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseDocument;
import com.marksem.entity.document.Document;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.DocumentRepository;
import com.marksem.repo.HouseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DocumentService {
    private final DocumentRepository documentRepo;
    private final HouseRepository houseRepo;

    public ResponseDocument create(RequestDocument d, String urlFile) {
        return houseRepo.findById(d.getHouseId())
                .map(h -> documentRepo.save(d.toEntity(h, urlFile)))
                .map(ResponseDocument::toDto)
                .orElseThrow(() -> new NoDataFoundException("house", d.getHouseId()));
    }

    public ResponseDocument update(RequestDocument d, String urlFile) {
        return documentRepo.findById(d.getId())
                .map(i -> {
                    i.setName(d.getName());
                    i.setType(d.getType());
                    if (urlFile != null) i.setUrlFile(urlFile);
                    return documentRepo.save(i);
                })
                .map(ResponseDocument::toDto)
                .orElseThrow(() -> new NoDataFoundException("document", d.getId()));
    }

    public ResponseDocument read(Long id) {
        return documentRepo.findById(id)
                .map(ResponseDocument::toDto)
                .orElseThrow(() -> new NoDataFoundException("document", id));
    }

    public PageableResponse<ResponseDocument> readAll(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Document> documents = documentRepo.findAll(pageable);
        return new PageableResponse<>(documents.getTotalElements(),
                documents.getContent().stream().map(ResponseDocument::toDto).collect(Collectors.toList()));
    }

    public Long delete(Long id) {
        documentRepo.deleteById(id);
        return id;
    }
}


