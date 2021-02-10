package com.marksem.service;

import com.marksem.repo.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileService {

  @Autowired
  private FileRepository fileRepository;

  public String upload(MultipartFile file, String token) {
    return this.fileRepository.upload(file, token);
  }

  public boolean delete(String filename, String token) { return this.fileRepository.delete(filename, token); }

  public String update(MultipartFile file, String token) { return this.fileRepository.update(file, token); }

}
