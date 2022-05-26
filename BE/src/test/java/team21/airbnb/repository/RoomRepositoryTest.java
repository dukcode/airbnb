package team21.airbnb.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDate;
import java.util.List;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team21.airbnb.domain.Booking;
import team21.airbnb.domain.Room;

@SpringBootTest
@Transactional
class RoomRepositoryTest {

    @Autowired
    RoomRepository roomRepository;

    @Autowired
    BookingRepository bookingRepository;

    @Test
    @DisplayName("Room 을 저장하고 불러온다")
    public void saveAndFindAll() throws Exception {
        // given
        String name = "room1";
        int roomCharge = 200000;
        roomRepository.save(Room.builder()
                .name(name)
                .roomCharge(roomCharge)
                .build());

        // when
        List<Room> rooms = roomRepository.findAll();

        // then
        Room findRoom = rooms.get(0);
        assertThat(findRoom.getName()).isEqualTo(name);
        assertThat(findRoom.getRoomCharge()).isEqualTo(roomCharge);
    }

    @Test
    @DisplayName("체크인, 체크아웃 사이 예약 가능한 방을 조회한다")
    public void findAvailableRoomBetweenCheckInAndCheckOut() throws Exception {
        // given
        Room room1 = Room.builder().name("room1")
                .roomCharge(200000)
                .build();
        roomRepository.save(room1);

        Booking booking1 = Booking.builder().checkInDate(LocalDate.of(2022, 5, 5))
                .checkOutDate(LocalDate.of(2022, 5, 10))
                .room(room1)
                .build();

        bookingRepository.save(booking1);

        // when
        List<Room> findEmptyList1 = roomRepository.findAvailableRoomsBetween(
                LocalDate.of(2022, 5, 3)
                , LocalDate.of(2022, 5, 7));

        List<Room> findEmptyList2 = roomRepository.findAvailableRoomsBetween(
                LocalDate.of(2022, 5, 8)
                , LocalDate.of(2022, 5, 11));

        List<Room> findEmptyList3 = roomRepository.findAvailableRoomsBetween(
                LocalDate.of(2022, 5, 1)
                , LocalDate.of(2022, 5, 10));

        List<Room> findNotEmptyList1 = roomRepository.findAvailableRoomsBetween(
                LocalDate.of(2022, 5, 1)
                , LocalDate.of(2022, 5, 5));

        List<Room> findNotEmptyList2 = roomRepository.findAvailableRoomsBetween(
                LocalDate.of(2022, 5, 10)
                , LocalDate.of(2022, 5, 15));

        // then
        assertThat(findEmptyList1.isEmpty()).isTrue();
        assertThat(findEmptyList2.isEmpty()).isTrue();
        assertThat(findEmptyList3.isEmpty()).isTrue();
        assertThat(findNotEmptyList1.isEmpty()).isFalse();
        assertThat(findNotEmptyList2.isEmpty()).isFalse();
    }
}
