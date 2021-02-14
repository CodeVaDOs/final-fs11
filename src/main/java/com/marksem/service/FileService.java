package com.marksem.service;

import com.marksem.repo.FileRepository;
import lombok.AllArgsConstructor;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Service
@AllArgsConstructor
public class FileService {

  private final FileRepository fileRepository;
  private final ObjectMapper mapper;


  public String upload(MultipartFile file, String token) {
    String responseJson = this.fileRepository.upload(file, token);
    return this.getFileUrlFromResponseJson(responseJson);
  }

  public boolean delete(String filename, String token) {
    return this.fileRepository.delete(filename, token);
  }

  public String update(MultipartFile file, String token) {
    String responseJson = this.fileRepository.update(file, token);
    return this.getFileUrlFromResponseJson(responseJson);
  }

  private String getFileUrlFromResponseJson(String responseJson) {
    Map<String, String> responseMap = new HashMap<>();
    try {
      responseMap = this.mapper.readValue(responseJson, HashMap.class);
    } catch (IOException e) {
      e.printStackTrace();
    }
    return responseMap.get("fileName");
  }

}
