package team21.airbnb.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import team21.airbnb.dto.response.RoomChargeDistributionResponse;
import team21.airbnb.service.RoomService;

@RestController
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    @GetMapping("/room_charge_distribution")
    public RoomChargeDistributionResponse getRoomChargeDistribution() {
        return roomService.getRoomChargeDistribution();
    }
}
