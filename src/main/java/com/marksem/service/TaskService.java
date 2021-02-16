package com.marksem.service;

import com.marksem.dto.request.RequestTask;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseTask;
import com.marksem.entity.task.Task;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repository.TaskRepository;
import com.marksem.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    public ResponseTask create(RequestTask t) {
        return userRepository.findById(t.getUserId())
                .map(u -> new ResponseTask(taskRepository.save(t.toEntity(u))))
                .orElseThrow(() -> new NoDataFoundException("user", t.getUserId()));
    }

    public ResponseTask update(RequestTask t) {
        return taskRepository.findById(t.getId())
                .map(i -> {
                    i.setText(t.getText());
                    i.setHeader(t.getHeader());
                    return taskRepository.save(i);
                })
                .map(ResponseTask::new)
                .orElseThrow(() -> new NoDataFoundException("task", t.getId()));
    }

    public ResponseTask read(Long id) {
        return taskRepository.findById(id)
                .map(ResponseTask::new)
                .orElseThrow(() -> new NoDataFoundException("task", id));
    }

    public PageableResponse<ResponseTask> readAllByUser(String email, int page, int size) {
        Page<Task> tasks = taskRepository.findAllByCreatedBy(email, PageRequest.of(page, size));
        return new PageableResponse<>(tasks.getTotalElements(),
                tasks.getContent().stream().map(ResponseTask::new).collect(Collectors.toList()));
    }

    public Long delete(Long id) {
        taskRepository.deleteById(id);
        return id;
    }
}
