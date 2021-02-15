package com.marksem.service;

import com.marksem.dto.request.RequestTask;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseTask;
import com.marksem.entity.task.Task;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository repository;

    public ResponseTask create(RequestTask m) {
        return new ResponseTask(repository.save(m.toEntity()));
    }

    public ResponseTask update(RequestTask m) {
        return repository.findById(m.getId())
                .map(i -> {
                    i.setText(m.getText());
                    return repository.save(i);
                })
                .map(ResponseTask::new)
                .orElseThrow(() -> new NoDataFoundException("task", m.getId()));
    }

    public ResponseTask read(Long id) {
        return repository.findById(id)
                .map(ResponseTask::new)
                .orElseThrow(() -> new NoDataFoundException("task", id));
    }

    public PageableResponse<ResponseTask> readAllByUser(String email, int page, int size) {
        Page<Task> tasks = repository.findAllByCreatedBy(email, PageRequest.of(page, size));
        return new PageableResponse<>(tasks.getTotalElements(),
                tasks.getContent().stream().map(ResponseTask::new).collect(Collectors.toList()));
    }

    public Long delete(Long id) {
        repository.deleteById(id);
        return id;
    }
}
