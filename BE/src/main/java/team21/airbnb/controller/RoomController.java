package team21.airbnb.controller;

import java.time.LocalDate;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team21.airbnb.service.RoomService;

@RestController
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    @GetMapping("/rooms/prices")
    public List<Integer> getAvailableRoomCharges(@RequestParam LocalDate checkInDate,
            @RequestParam LocalDate checkoutDate) {
        return roomService.getAvailableRoomCharges(checkInDate, checkoutDate);
    }
}
