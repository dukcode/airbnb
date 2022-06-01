package team21.airbnb.service;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDate;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team21.airbnb.domain.Booking;
import team21.airbnb.domain.Room;
import team21.airbnb.repository.BookingRepository;
import team21.airbnb.repository.RoomRepository;

@SpringBootTest
@Transactional
class RoomServiceTest {


    @Autowired RoomRepository roomRepository;
    @Autowired RoomService roomService;
    @Autowired BookingRepository bookingRepository;

    @Test
    public void getRoomChargeDistributionTest() {
        // given
        Room room1 = Room.builder().name("room1").roomCharge(300).build();
        Room room2 = Room.builder().name("room2").roomCharge(200).build();
        Room room3 = Room.builder().name("room3").roomCharge(100).build();

        roomRepository.save(room1);
        roomRepository.save(room2);
        roomRepository.save(room3);

        // unavailable
        bookingRepository.save(Booking.builder().room(room1).checkInDate(LocalDate.of(2022, 5, 5))
                .checkOutDate(LocalDate.of(2022, 5, 10)).build());
        // available
        bookingRepository.save(Booking.builder().room(room2).checkInDate(LocalDate.of(2022, 5, 3))
                .checkOutDate(LocalDate.of(2022, 5, 4)).build());
        // available
        bookingRepository.save(Booking.builder().room(room3).checkInDate(LocalDate.of(2022, 5, 11))
                .checkOutDate(LocalDate.of(2022, 5, 11)).build());

        // when
        List<Integer> priceList = roomService.getAvailableRoomCharges(LocalDate.of(2022, 5, 5),
                LocalDate.of(2022, 5, 10));

        // then
        assertThat(priceList.size()).isEqualTo(2);
        assertThat(priceList.get(0)).isEqualTo(100);
        assertThat(priceList.get(1)).isEqualTo(200);
    }


}
