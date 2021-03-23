package com.marksem.service;

import com.marksem.dto.response.statistic.ResponseAccessPanelManagerInfo;
import com.marksem.dto.response.statistic.ResponseAccessPanelUserInfo;
import com.marksem.dto.response.ResponseCatalogue;
import com.marksem.dto.response.ResponseUser;
import com.marksem.dto.response.statistic.ResponseAccessPanelManagerInfo;
import com.marksem.dto.response.statistic.ResponseAccessPanelUserInfo;
import com.marksem.entity.booking.BookingMaintenanceType;
import com.marksem.entity.contact.ContactType;
import com.marksem.entity.document.DocumentType;
import com.marksem.entity.house.HouseMaintenanceType;
import com.marksem.entity.notification.Importance;
import com.marksem.entity.transaction.Currency;
import com.marksem.entity.transaction.FinanceType;
import com.marksem.entity.user.Language;
import com.marksem.entity.user.Role;
import com.marksem.repository.BookingRepository;
import com.marksem.repository.DocumentRepository;
import com.marksem.repository.HouseRepository;
import com.marksem.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

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
        List<ResponseUser> quantityOfClients = (userRepository.findByManagerId(id)).stream().map(ResponseUser::new).collect(Collectors.toList());
        long quantityOfContracts = documentRepository.getContractsQuantity(id);
        return new ResponseAccessPanelManagerInfo(quantityOfClients, quantityOfContracts);
    }

    public ResponseCatalogue getCatalogue() {
        return new ResponseCatalogue(
                Arrays.stream(Role.values()).map(Enum::name).collect(Collectors.toList()),
                Arrays.stream(ContactType.values()).map(Enum::name).collect(Collectors.toList()),
                Arrays.stream(DocumentType.values()).map(Enum::name).collect(Collectors.toList()),
                Arrays.stream(BookingMaintenanceType.values()).map(Enum::name).collect(Collectors.toList()),
                Arrays.stream(HouseMaintenanceType.values()).map(Enum::name).collect(Collectors.toList()),
                Arrays.stream(Importance.values()).map(Enum::name).collect(Collectors.toList()),
                Arrays.stream(Currency.values()).map(Enum::name).collect(Collectors.toList()),
                Arrays.stream(FinanceType.values()).map(Enum::name).collect(Collectors.toList()),
                Arrays.stream(Language.values()).map(Enum::name).collect(Collectors.toList())
                );
    }
}
