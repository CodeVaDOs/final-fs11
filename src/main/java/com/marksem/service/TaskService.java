package com.marksem.service;

import com.marksem.dto.request.RequestTask;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseTask;
import com.marksem.entity.task.Task;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repo.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository repo;

    public ResponseTask create(RequestTask m) {
        return ResponseTask.toDto(repo.save(m.toEntity()));
    }

    public ResponseTask update(RequestTask m) {
        return repo.findById(m.getId())
                .map(i -> {
                    i.setText(m.getText());
                    return repo.save(i);
                })
                .map(ResponseTask::toDto)
                .orElseThrow(() -> new NoDataFoundException("task", m.getId()));
    }

    public ResponseTask read(Long id) {
        return repo.findById(id)
                .map(ResponseTask::toDto)
                .orElseThrow(() -> new NoDataFoundException("task", id));
    }

    public PageableResponse<ResponseTask> readAllByUser(String email, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Task> tasks = repo.findAllByCreatedBy(email, pageable);
        return new PageableResponse<>(tasks.getTotalElements(),
                tasks.getContent().stream().map(ResponseTask::toDto).collect(Collectors.toList()));
    }

    public Long delete(Long id) {
        repo.deleteById(id);
        return id;
    }
}
