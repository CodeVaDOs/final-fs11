package com.marksem.repository;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.*;
import org.springframework.stereotype.Repository;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Repository
public class FileRepository {

  @Autowired
  private RestTemplate restTemplate;
  @Value("${url.fileServer}")
  private String fileServerUrl;

  public String upload(MultipartFile file, String token) {

    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.MULTIPART_FORM_DATA);
    headers.set("Authorization", token);
    MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();

    File tempFile;
    try {
      String extension = "." + FilenameUtils.getExtension(file.getOriginalFilename());
      tempFile = File.createTempFile(file.getOriginalFilename().split("\\.")[0] + "__", extension);
      file.transferTo(tempFile);
      body.add("file", new FileSystemResource(tempFile));
    } catch (IOException e) {
      e.printStackTrace();
    }

    HttpEntity<MultiValueMap<String, Object>> requestEntity
        = new HttpEntity<>(body, headers);

    ResponseEntity<String> exchange = restTemplate.exchange(
        this.fileServerUrl + "/uploadFile", HttpMethod.POST, requestEntity, String.class);

    return exchange.getBody();

  }

  public boolean delete(String filename, String token) {
    HttpHeaders httpHeaders = new HttpHeaders();
    httpHeaders.set("Authorization", token);

    ResponseEntity<String> exchange = restTemplate.exchange(
        this.fileServerUrl + "/deleteFile/" + filename, HttpMethod.DELETE, new HttpEntity<>(httpHeaders), String.class);

    return exchange.getStatusCode() == HttpStatus.OK;
  }

  public String update(MultipartFile file, String token) {
    return this.upload(file, token);
  }

}