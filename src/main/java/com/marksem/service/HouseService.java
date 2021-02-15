package com.marksem.service;

import com.marksem.dto.request.RequestHouse;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseHouse;
import com.marksem.entity.house.House;
import com.marksem.entity.house.HouseImage;
import com.marksem.exception.NoDataFoundException;
import com.marksem.repository.HouseImageRepository;
import com.marksem.repository.HouseModelRepository;
import com.marksem.repository.HouseRepository;
import com.marksem.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class HouseService {
    private final HouseRepository houseRepository;
    private final UserRepository userRepository;
    private final HouseModelRepository houseModelRepository;
    private final HouseImageRepository houseImageRepository;
    private final FileService fileService;

    public ResponseHouse create(RequestHouse h, String token) {
        return userRepository.findById(h.getOwnerId())
                .map(u -> houseModelRepository.findById(h.getHouseModelId())
                        .map(hm -> {
                            House saved = houseRepository.save(h.toEntity(u, hm));
                            if (h.getImages() != null) saveImages(h.getImages(), token, saved);
                            return saved;
                        })
                        .orElseThrow(() -> new NoDataFoundException("houseModel", h.getHouseModelId())))
                .map(ResponseHouse::toDto)
                .orElseThrow(() -> new NoDataFoundException("user", h.getOwnerId()));
    }

    public void saveImages(List<MultipartFile> images, String token, House house) {
        images.parallelStream()
                .map(file -> fileService.upload(file, token))
                .forEach(url -> houseImageRepository.save(new HouseImage(url, house)));
    }

    public ResponseHouse update(RequestHouse h) {
        return houseRepository.findById(h.getId())
                .map(e -> {
                    e.setLocation(h.getLocation());
                    e.setEquipment(e.getEquipment());
                    e.setArea(h.getArea());
                    e.setAvgRating(h.getAvgRating());
                    e.setDescription(h.getDescription());
                    return ResponseHouse.toDto(houseRepository.save(e));
                })
                .orElseThrow(() -> new NoDataFoundException("house", h.getId()));
    }

    public ResponseHouse read(Long id) {
        return houseRepository.findById(id)
                .map(ResponseHouse::toDto)
                .orElseThrow(() -> new NoDataFoundException("house", id));
    }

    public PageableResponse<ResponseHouse> readAll(int page, int size) {
        Page<House> houses = houseRepository.findAll(PageRequest.of(page, size));
        return new PageableResponse<>(houses.getTotalElements(),
                houses.getContent().stream().map(ResponseHouse::toDto).collect(Collectors.toList()));
    }

    public Long delete(Long id) {
        houseRepository.deleteById(id);
        return id;
    }
}
