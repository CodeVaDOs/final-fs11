//package com.marksem.service;
//
//import com.marksem.entity.House;
//import com.marksem.repo.HouseRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.NoSuchElementException;
//
//@Service
//@RequiredArgsConstructor
//public class HouseService {
//    private final HouseRepository repo;
//
//    public House read(Long id){
//        return repo.findById(id).orElseThrow(NoSuchElementException::new);
//    }
//
//    public List<House> readAll(){
//        return repo.findAll();
//    }
//
//    public Long delete(Long id){
//        repo.deleteById(id);
//        return id;
//    }
//}
