package team21.airbnb.service;

import static org.assertj.core.api.Assertions.assertThat;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.time.LocalDate;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team21.airbnb.domain.Booking;
import team21.airbnb.domain.Booking.BookingStatus;
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
import team21.airbnb.repository.BookingRepository;
import team21.airbnb.repository.RoomRepository;

@SpringBootTest
@Transactional
class RoomServiceTest {

    @Autowired RoomService roomService;

    @Autowired RoomRepository roomRepository;
    @Autowired BookingRepository bookingRepository;

    @BeforeEach
    public void setUp() {

        String description = "It's safe, clean, cozy, and convenient.\n"
                + "You can stay safely within the apartment, and\n"
                + "you will have access to a clean kitchen and toilet.\n"
                + "There is a spacious queen size bed and a cozy living room couch. \n"
                + "You can do laundry and food.";

        Room room = new Room(
                RoomType.APARTMENT,
                SpaceType.ENTIRE,
                "Spacious and Comfortable cozy house #4",
                description,
                "https://a0.muscache.com/im/pictures/7cd3996c-7c1d-464a-800d-de9718286d33.jpg?im_w=1200",
                new RoomCondition(3, 0, 1, 1),
                new RoomChargeInformation(82953, 25996, 0.04),
                new ReviewStatus(4.80, 127),
                new Location(136.9896, 37.5499));

        Booking booking = new Booking(
                BookingStatus.BOOKED,
                new StayDate(LocalDate.of(2022, 6, 1), LocalDate.of(2022, 6, 3)),
                new GuestGroup(1, 1, 1),
                room,
                null);

        roomRepository.save(room);
        bookingRepository.save(booking);
    }

    @Test
    @DisplayName("room이 검색결과에 포함된다.")
    public void searchRoom() throws Exception {
        // given
        RoomSearchCondition condition = new RoomSearchCondition(
                130.0,
                40.0,
                140.0,
                30.0,
                LocalDate.of(2022, 6, 10),
                LocalDate.of(2022, 6, 13),
                0,
                1000000,
                3,
                1, 1, 1
        );

        // when
        List<RoomSearchResponse> roomSearchResponses = roomService.searchRooms(condition);

        ObjectMapper objectMapper = new ObjectMapper();
        String s = objectMapper.writeValueAsString(roomSearchResponses);
        System.out.println(s);
        // then
        assertThat(roomSearchResponses).hasSize(1);
    }

    @Test
    @DisplayName("room detail을 검색한다")
    public void searchRoomDetail() {
        RoomDetailResponse roomDetail = roomService.getRoomDetail(1L,
                new StayDate(LocalDate.of(2022, 6, 10), LocalDate.of(2022, 6, 13)),
                new GuestGroup(1, 1, 1));
        System.out.println(roomDetail);
    }


    @Test
    @DisplayName("기간 내에 예약이 가능한 숙소들의 가격을 오름차순으로 불러온다")
    public void getRoomChargeDistributionTest() {
        // // given
        // Room room1 = Room.builder()
        //         .name("room1")
        //         .roomChargeInfo(new RoomChargeInformation(300, 0, 0.0))
        //         .build();
        // Room room2 = Room.builder()
        //         .name("room2")
        //         .roomChargeInfo(new RoomChargeInformation(200, 0, 0.0))
        //         .build();
        // Room room3 = Room.builder()
        //         .name("room3")
        //         .roomChargeInfo(new RoomChargeInformation(100, 0, 0.0))
        //         .build();
        //
        // roomRepository.save(room1);
        // roomRepository.save(room2);
        // roomRepository.save(room3);
        //
        // // unavailable
        // bookingRepository.save(Booking.builder().room(room1)
        //         .stayDate(new StayDate(LocalDate.of(2022, 5, 5), LocalDate.of(2022, 5, 10)))
        //         .build());
        // // available
        // bookingRepository.save(Booking.builder().room(room2)
        //         .stayDate(new StayDate(LocalDate.of(2022, 5, 3), LocalDate.of(2022, 5, 4)))
        //         .build());
        // // available
        // bookingRepository.save(Booking.builder().room(room3)
        //         .stayDate(new StayDate(LocalDate.of(2022, 5, 11), LocalDate.of(2022, 5, 12)))
        //         .build());
        //
        // // when
        // List<Integer> priceList = roomService.getAvailableRoomCharges(LocalDate.of(2022, 5, 5),
        //         LocalDate.of(2022, 5, 10));
        //
        // // then
        // assertThat(priceList.size()).isEqualTo(2);
        // assertThat(priceList.get(0)).isEqualTo(100);
        // assertThat(priceList.get(1)).isEqualTo(200);
    }


}
