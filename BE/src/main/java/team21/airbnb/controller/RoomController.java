package team21.airbnb.controller;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team21.airbnb.domain.Room;
import team21.airbnb.domain.Room.RoomType;
import team21.airbnb.domain.Room.SpaceType;
import team21.airbnb.domain.embeddable.GuestGroup;
import team21.airbnb.domain.embeddable.Location;
import team21.airbnb.domain.embeddable.ReviewStatus;
import team21.airbnb.domain.embeddable.RoomChargeInformation;
import team21.airbnb.domain.embeddable.RoomCondition;
import team21.airbnb.domain.embeddable.StayDate;
import team21.airbnb.dto.request.RoomSearchCondition;
import team21.airbnb.dto.response.RoomDetailResponse;
import team21.airbnb.dto.response.RoomSearchResponse;
import team21.airbnb.service.RoomService;

@RequiredArgsConstructor
@RestController
public class RoomController {

    private final RoomService roomService;

    @GetMapping("/rooms/charges")
    public List<Integer> getAvailableRoomCharges(
            @RequestParam(value = "checkInDate", required = false)
            @DateTimeFormat(iso = ISO.DATE) LocalDate checkInDate,
            @RequestParam(value = "checkOutDate", required = false)
            @DateTimeFormat(iso = ISO.DATE) LocalDate checkOutDate
    ) {
        return roomService.getAvailableRoomCharges(checkInDate, checkOutDate);
    }

    @GetMapping("/rooms")
    public List<RoomSearchResponse> listRooms(RoomSearchCondition searchCondition, Integer page) {
        System.out.println("request = " + searchCondition);

        return roomService.searchRooms(searchCondition, page);
    }

    @GetMapping("rooms/{id}")
    public RoomDetailResponse getRoomDetail(@PathVariable Long id,
            @RequestParam(value = "checkInDate", required = false)
            @DateTimeFormat(iso = ISO.DATE) LocalDate checkInDate,
            @RequestParam(value = "checkOutDate", required = false)
            @DateTimeFormat(iso = ISO.DATE) LocalDate checkOutDate,
            @RequestParam(value = "adults", required = false) Integer numOfAdults,
            @RequestParam(value = "children", required = false) Integer numOfChildren,
            @RequestParam(value = "infants", required = false) Integer numOfInfants) {

        return roomService.getRoomDetail(id,
                new StayDate(checkInDate, checkOutDate),
                new GuestGroup(numOfAdults, numOfChildren, numOfInfants));
    }

    @PostMapping("/rooms/createRandom")
    public String createRandomRoom(@RequestParam Integer count) {
        for (int i = 0; i < count; i++) {
            List<RoomType> roomTypes = Collections.unmodifiableList(
                    Arrays.asList(RoomType.values()));
            List<SpaceType> spaceTypes = Collections.unmodifiableList(
                    Arrays.asList(SpaceType.values()));
            Random random = new Random();
            String[] images = {

                    "https://a0.muscache.com/im/pictures/miso/Hosting-54026187/original/2548bbfa-b85b-49e4-a52d-1c0e0aaff423.jpeg?im_w=1200",
                    "https://a0.muscache.com/im/pictures/miso/Hosting-54026187/original/187e49f0-4d56-4b90-ad80-6b87828e915d.jpeg?im_w=1200",
                    "https://a0.muscache.com/im/pictures/miso/Hosting-54026187/original/5c3acfee-4975-4a7a-9b91-148dc5e5b6c3.jpeg?im_w=720",
                    "https://a0.muscache.com/im/pictures/miso/Hosting-54026187/original/6dbfc0be-3fdc-478c-9cc8-b6e420cde19e.jpeg?im_w=1200",
                    "https://a0.muscache.com/im/pictures/miso/Hosting-54026187/original/799becdd-6895-470b-8c34-13e83be4936c.jpeg?im_w=720",
                    "https://a0.muscache.com/im/pictures/miso/Hosting-54026187/original/d614875e-3686-4a75-8e37-accca9b4c6f9.jpeg?im_w=1200",
                    "https://a0.muscache.com/im/pictures/b4066637-a13d-4a2f-801b-0d4d8551d719.jpg?im_w=1200",
                    "https://a0.muscache.com/im/pictures/42ee6dd0-2d96-4a85-a05d-4053506dbe16.jpg?im_w=720",
                    "https://a0.muscache.com/im/pictures/55e0cb27-fa61-45d7-a23a-e89211a7f70d.jpg?im_w=1200",
                    "https://a0.muscache.com/im/pictures/927a69f1-fb43-46b5-98d9-547de6883dd8.jpg?im_w=1200",
                    "https://a0.muscache.com/im/pictures/5c980117-5efe-4d81-abb9-ebf11c13860b.jpg?im_w=1200",
                    "https://a0.muscache.com/im/pictures/fe7730a3-bb16-4f84-b7c4-9a9f3a03a0f2.jpg?im_w=1200",
                    "https://a0.muscache.com/im/pictures/4cbe63e1-0f2d-46cd-b8c2-66a355ee9707.jpg?im_w=720",
                    "https://a0.muscache.com/im/pictures/miso/Hosting-53637151/original/61ac071d-246b-44ac-bbbe-7f92c30cfa28.jpeg?im_w=1200",
                    "https://a0.muscache.com/im/pictures/miso/Hosting-53637151/original/f7d788f0-5300-4a91-9dd6-68cc44dcb69c.jpeg?im_w=1200",
                    "https://a0.muscache.com/im/pictures/miso/Hosting-53637151/original/0e5820c8-ae9f-488f-93aa-43c40e71f8ce.jpeg?im_w=1200",
                    "https://a0.muscache.com/im/pictures/monet/Select-34444025/original/944d56fa-e9a6-48fb-a9c5-e4e3778042d7?im_w=720",
                    "https://a0.muscache.com/im/pictures/miso/Hosting-34692739/original/3a75ba1b-e9cb-4b93-b6eb-b757bbcbfa1e.jpeg?im_w=720",
                    "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/91290830-0db6-40c0-a23b-86a904ee5239.jpeg?im_w=720",
                    "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720",
                    "https://a0.muscache.com/im/pictures/miso/Hosting-49374597/original/ee8270bd-c113-474a-97f8-f38f5c7d6047.jpeg?im_w=720",
                    "https://a0.muscache.com/im/pictures/2c6144b5-102b-4482-84a3-70026426a789.jpg?im_w=720",
                    "https://a0.muscache.com/im/pictures/95fdd9fb-e3aa-4bdf-ac74-ae32b3f7c6b4.jpg?im_w=720",
                    "https://a0.muscache.com/im/pictures/f8ecb7bb-c687-47bd-8864-3b9fd6a40c0c.jpg?im_w=720",
                    "https://a0.muscache.com/im/pictures/4595e1b4-1f7a-4cf5-9f3d-c84075a00beb.jpg?im_w=720",
                    "https://a0.muscache.com/im/pictures/0d18034d-de90-4672-ba00-caa33df4e7a8.jpg?im_w=720",
                    "https://a0.muscache.com/im/pictures/34ce7d0c-cf47-45a4-8879-cbd1f0307634.jpg?im_w=720",
                    "https://a0.muscache.com/im/pictures/miso/Hosting-49856654/original/fa4d3ea2-1544-4b4d-b6fe-e5a025f14543.jpeg?im_w=720",
                    "https://a0.muscache.com/im/pictures/afce8fc5-4d7d-4d4b-a9ed-694267ae53e1.jpg?im_w=720",
                    "https://a0.muscache.com/im/pictures/prohost-api/Hosting-21032835/original/a5652a35-4dad-4921-9e1c-b08abab4b17d.jpeg?im_w=720",
                    "https://a0.muscache.com/im/pictures/2b73c82c-871a-4eb7-bfcf-0138a50822f6.jpg?im_w=720"
            };
            roomService.save(
                    new Room(
                            roomTypes.get(random.nextInt(roomTypes.size())),
                            spaceTypes.get(random.nextInt(spaceTypes.size())),
                            "Room Name " + UUID.randomUUID().toString().substring(4),
                            "description " + UUID.randomUUID().toString().substring(4),
                            images[random.nextInt(images.length)],
                            new RoomCondition(random.nextInt(10), random.nextInt(10),
                                    random.nextInt(10), random.nextInt(10)),
                            new RoomChargeInformation(random.nextInt(300000), random.nextInt(30000),
                                    0.04),
                            new ReviewStatus(5 * random.nextDouble(), random.nextInt(500)),
                            new Location(30.0 * random.nextDouble() + 120.0,
                                    30. * random.nextDouble() + 20.0)));
        }

        return "ok";
    }

}
