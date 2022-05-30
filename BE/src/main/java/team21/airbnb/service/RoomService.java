package team21.airbnb.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team21.airbnb.domain.Room;
import team21.airbnb.dto.request.RoomChargeDistributionRequest;
import team21.airbnb.dto.response.RoomChargeDistributionResponse;
import team21.airbnb.repository.RoomRepository;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class RoomService {

    public static final int DISTRIBUTION_UNIT = 10;

    private final RoomRepository roomRepository;

    public RoomChargeDistributionResponse getRoomChargeDistribution(
            RoomChargeDistributionRequest roomChargeDistributionRequest) {
        List<Room> rooms = roomRepository.findAvailableRoomsBetween(
                roomChargeDistributionRequest.getCheckInDate(),
                roomChargeDistributionRequest.getCheckOutDate());

        Map<Integer, Integer> graph = new HashMap<>();
        int maxRoomCharge = Integer.MIN_VALUE;
        int minRoomCharge = Integer.MAX_VALUE;

        for (Room room : rooms) {
            int roomCharge = room.getRoomCharge();
            maxRoomCharge = Math.max(maxRoomCharge, roomCharge);
            minRoomCharge = Math.min(minRoomCharge, roomCharge);

            graph.merge(room.getDistributedRoomCharge(DISTRIBUTION_UNIT), 1, Integer::sum);
        }

        return new RoomChargeDistributionResponse(minRoomCharge, maxRoomCharge, graph);
    }

    @Transactional
    public Long save(Room room) {
        // TODO : parameter DTO 로 받기, Host 추가
        return roomRepository.save(room);
    }

}
