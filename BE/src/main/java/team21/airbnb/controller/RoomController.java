package team21.airbnb.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team21.airbnb.dto.request.RoomChargeDistributionRequest;
import team21.airbnb.dto.response.RoomChargeDistributionResponse;
import team21.airbnb.service.RoomService;

@RestController
@RequestMapping("/rooms")
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    @GetMapping("/charge_distribution")
    public RoomChargeDistributionResponse getRoomChargeDistribution(
            @RequestBody RoomChargeDistributionRequest roomChargeDistributionRequest) {
        return roomService.getRoomChargeDistribution(roomChargeDistributionRequest);
    }
}
