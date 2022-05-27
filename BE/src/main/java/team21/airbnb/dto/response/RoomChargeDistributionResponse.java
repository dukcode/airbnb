package team21.airbnb.dto.response;

import java.util.Map;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class RoomChargeDistributionResponse {

    private Integer minRoomCharge;
    private Integer maxRoomCharge;
    private Map<Integer, Integer> graph;

    public RoomChargeDistributionResponse(Integer minRoomCharge, Integer maxRoomCharge,
            Map<Integer, Integer> graph) {
        this.minRoomCharge = minRoomCharge;
        this.maxRoomCharge = maxRoomCharge;
        this.graph = graph;
    }

}
