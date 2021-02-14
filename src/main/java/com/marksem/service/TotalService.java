package com.marksem.service;

import com.marksem.dto.response.ResponseAccessPanelManagerInfo;
import com.marksem.dto.response.ResponseAccessPanelUserInfo;
import com.marksem.repository.BookingRepository;
import com.marksem.repository.DocumentRepository;
import com.marksem.repository.HouseRepository;
import com.marksem.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TotalService {
    private final UserRepository userRepository;
    private final DocumentRepository documentRepository;
    private final HouseRepository houseRepository;
    private final BookingRepository bookingRepository;

    public ResponseAccessPanelUserInfo getAccessPanelUserInfo() {
        long quantityOfHouses = houseRepository.count();
        long quantityOfBookings = bookingRepository.getBookingsQuantity();
        return new ResponseAccessPanelUserInfo(quantityOfHouses, quantityOfHouses - quantityOfBookings);
    }

    public ResponseAccessPanelManagerInfo getAccessPanelManagerInfo(Long id) {
        long quantityOfClients = userRepository.countByManagerId(id);
        long quantityOfContracts = documentRepository.getContractsQuantity(id);
        return new ResponseAccessPanelManagerInfo(quantityOfClients, quantityOfContracts);
    }
}
