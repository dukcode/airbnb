package team21.airbnb.controller;

import java.time.LocalDate;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team21.airbnb.domain.embeddable.GuestGroup;
import team21.airbnb.domain.embeddable.StayDate;
import team21.airbnb.dto.request.RoomSearchCondition;
import team21.airbnb.dto.response.RoomDetailResponse;
import team21.airbnb.dto.response.RoomSearchResponse;
import team21.airbnb.service.RoomService;

@RestController
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    @GetMapping("/rooms/charges")
    public List<Integer> getAvailableRoomCharges(@RequestParam LocalDate checkInDate,
            @RequestParam LocalDate checkoutDate) {
        return roomService.getAvailableRoomCharges(checkInDate, checkoutDate);
    }

    @GetMapping("/rooms")
    public List<RoomSearchResponse> listRooms(RoomSearchCondition searchCondition) {
        System.out.println("request = " + searchCondition);

        return roomService.searchRooms(searchCondition);
    }

    @GetMapping("rooms/{id}")
    public RoomDetailResponse getRoomDetail(@PathVariable Long id,
            @RequestParam(value = "checkIn", required = false)
            @DateTimeFormat(iso = ISO.DATE) LocalDate checkInDate,
            @RequestParam(value = "checkOut", required = false)
            @DateTimeFormat(iso = ISO.DATE) LocalDate checkOutDate,
            @RequestParam(value = "adults", required = false) Integer numOfAdults,
            @RequestParam(value = "children", required = false) Integer numOfChildren,
            @RequestParam(value = "infants", required = false) Integer numOfInfants) {

        return roomService.getRoomDetail(id,
                new StayDate(checkInDate, checkOutDate),
                new GuestGroup(numOfAdults, numOfChildren, numOfInfants));
    }

}
