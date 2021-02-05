package com.marksem.controller;

import com.marksem.service.FileService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/v1/files")
@AllArgsConstructor
public class FileController {

  private final FileService fileService;

  @PostMapping
  public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file, @RequestHeader("Authorization") String token) {

    return ResponseEntity.ok(this.fileService.upload(file, token));

  }

}
