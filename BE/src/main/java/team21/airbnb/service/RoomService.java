package team21.airbnb.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team21.airbnb.domain.Room;
import team21.airbnb.repository.RoomRepository;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    public List<Integer> getAvailableRoomCharges(LocalDate checkInDate, LocalDate checkOutDate) {
        List<Room> rooms = roomRepository.findAvailableRoomsOrderByRoomChargeAcsBetween(
                checkInDate, checkOutDate);

        return rooms.stream().map(Room::getRoomCharge).collect(Collectors.toList());
    }

    @Transactional
    public Long save(Room room) {
        // TODO : parameter DTO 로 받기, Host 추가
        return roomRepository.save(room);
    }

}
