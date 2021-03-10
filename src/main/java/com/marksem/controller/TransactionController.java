package com.marksem.controller;

import com.marksem.dto.request.RequestTransaction;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseTransaction;
import com.marksem.dto.response.ResponseUser;
import com.marksem.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("api/v1/transactions")
@RequiredArgsConstructor
public class TransactionController {
  private final TransactionService service;

  @GetMapping("/byDate/{date}")
  public ResponseEntity<?> getByDate(@PathVariable("date") String sDate) {
    try {
      Date date = new SimpleDateFormat("dd-MM-yyyy").parse(sDate);
      return ResponseEntity.ok(service.getByDate(date));
    } catch (ParseException e) {
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
  };

//    @GetMapping
//    @PreAuthorize("hasAuthority('developers:read')")
//    public ResponseEntity<PageableResponse<ResponseTransaction>> readAll(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
//        return ResponseEntity.ok(service.readAll(page, size));
//    }
//
//    @GetMapping("{id}")
//    @PreAuthorize("hasAuthority('developers:read')")
//    public ResponseEntity<ResponseTransaction> read(@PathVariable("id") Long id) {
//        return ResponseEntity.ok(service.read(id));
//    }
//
//    @PostMapping
//    @PreAuthorize("hasAuthority('developers:write')")
//    public ResponseEntity<ResponseTransaction> create(@RequestBody RequestTransaction t) {
//        return ResponseEntity.ok(service.create(t));
//    }
//
//    @PutMapping
//    @PreAuthorize("hasAuthority('developers:write')")
//    public ResponseEntity<ResponseTransaction> update(@RequestBody RequestTransaction t) {
//        return ResponseEntity.ok(service.update(t));
//    }
//
//    @DeleteMapping("{id}")
//    @PreAuthorize("hasAuthority('developers:write')")
//    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
//        return ResponseEntity.ok(service.delete(id));
//    }
}
