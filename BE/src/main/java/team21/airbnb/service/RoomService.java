package team21.airbnb.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team21.airbnb.domain.Room;
import team21.airbnb.domain.embeddable.GuestGroup;
import team21.airbnb.domain.embeddable.StayDate;
import team21.airbnb.dto.request.RoomSearchCondition;
import team21.airbnb.dto.response.RoomDetailResponse;
import team21.airbnb.dto.response.RoomSearchResponse;
import team21.airbnb.repository.RoomRepository;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    public List<Integer> getAvailableRoomCharges(LocalDate checkInDate, LocalDate checkOutDate) {
        List<Room> rooms = roomRepository.findAvailableRoomsOrderByRoomChargeAcsBetween(
                checkInDate, checkOutDate);

        return rooms.stream().map(r -> r.getRoomChargeInfo().getRoomCharge())
                .collect(Collectors.toList());
    }

    @Transactional
    public Long save(Room room) {
        // TODO : parameter DTO 로 받기, Host 추가
        return roomRepository.save(room);
    }

    public List<RoomSearchResponse> searchRooms(RoomSearchCondition condition) {
        List<Room> rooms = roomRepository.searchWithCondition(condition);
        return rooms.stream().map(r -> RoomSearchResponse.from(r, condition.getStayDate()))
                .collect(Collectors.toList());
    }

    public RoomDetailResponse getRoomDetail(Long id, StayDate stayDate, GuestGroup guestGroup) {
        Room room = roomRepository.findOne(id)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 숙소입니다."));

        return RoomDetailResponse.from(room, stayDate, guestGroup);
    }
}
