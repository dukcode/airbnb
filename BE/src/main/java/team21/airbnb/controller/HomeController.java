package team21.airbnb.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import team21.airbnb.dto.response.RoomChargeDistributionResponse;
import team21.airbnb.service.RoomService;

@RestController
public class HomeController {

    private final RoomService roomService;

    public HomeController(RoomService roomService) {
        this.roomService = roomService;
    }

    @GetMapping("/room_charge_distribution")
    public RoomChargeDistributionResponse getRoomChargeDistribution() {
        return roomService.getRoomChargeDistribution();
    }
}
