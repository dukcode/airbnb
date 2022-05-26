package team21.airbnb.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team21.airbnb.domain.Room;
import team21.airbnb.dto.response.RoomChargeDistributionResponse;
import team21.airbnb.repository.RoomRepository;

@Service
@Transactional(readOnly = true)
public class RoomService {

    public static final int DISTRIBUTION_RANGE = 10;

    private final RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public RoomChargeDistributionResponse getRoomChargeDistribution() {
        List<Room> rooms = roomRepository.findAll();
        Map<Integer, Integer> graph = new HashMap<>();
        int maxRoomCharge = Integer.MIN_VALUE;
        int minRoomCharge = Integer.MAX_VALUE;

        for (Room room : rooms) {
            int roomCharge = room.getRoomCharge();
            maxRoomCharge = Math.max(maxRoomCharge, roomCharge);
            minRoomCharge = Math.min(minRoomCharge, roomCharge);

            graph.merge(room.getDistributedRoomCharge(DISTRIBUTION_RANGE), 1, Integer::sum);
        }

        return new RoomChargeDistributionResponse(minRoomCharge, maxRoomCharge, graph);
    }

    @Transactional
    public Long save(Room room) {
        // TODO : parameter DTO 로 받기, Host 추가
        return roomRepository.save(room);
    }

}
