package team21.airbnb.dto.response;

import java.util.Map;
import lombok.Getter;

@Getter
public class RoomChargeDistributionResponse {

    private final Integer minRoomCharge;
    private final Integer maxRoomCharge;

    private final Map<Integer, Integer> graph;

    public RoomChargeDistributionResponse(Integer minRoomCharge, Integer maxRoomCharge,
            Map<Integer, Integer> graph) {
        this.minRoomCharge = minRoomCharge;
        this.maxRoomCharge = maxRoomCharge;
        this.graph = graph;
    }

}
