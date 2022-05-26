package team21.airbnb.service;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDate;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team21.airbnb.domain.Booking;
import team21.airbnb.domain.Room;
import team21.airbnb.dto.request.RoomChargeDistributionRequest;
import team21.airbnb.dto.response.RoomChargeDistributionResponse;
import team21.airbnb.repository.BookingRepository;
import team21.airbnb.repository.RoomRepository;

@SpringBootTest
@Transactional
class RoomServiceTest {


    public static final int MIN_ROOM_CHARGE = 10005;
    public static final int MAX_ROOM_CHARGE = MIN_ROOM_CHARGE + 1000;

    @Autowired RoomRepository roomRepository;
    @Autowired RoomService roomService;
    @Autowired BookingRepository bookingRepository;

    @Test
    public void getRoomChargeDistributionTest() {
        // given
        Room room1 = Room.builder().name("room1").roomCharge(MIN_ROOM_CHARGE).build();
        Room room2 = Room.builder().name("room2").roomCharge(MIN_ROOM_CHARGE).build();
        Room room3 = Room.builder().name("room3").roomCharge(MAX_ROOM_CHARGE).build();

        roomRepository.save(room1);
        roomRepository.save(room2);
        roomRepository.save(room3);

        // unavailable
        bookingRepository.save(Booking.builder().room(room1).checkInDate(LocalDate.of(2022, 5, 5))
                .checkOutDate(LocalDate.of(2022, 5, 10)).build());
        // available
        bookingRepository.save(Booking.builder().room(room2).checkInDate(LocalDate.of(2022, 5, 4))
                .checkOutDate(LocalDate.of(2022, 5, 5)).build());
        // available
        bookingRepository.save(Booking.builder().room(room3).checkInDate(LocalDate.of(2022, 5, 10))
                .checkOutDate(LocalDate.of(2022, 5, 11)).build());

        // when
        RoomChargeDistributionRequest roomChargeDistributionRequest = new RoomChargeDistributionRequest(
                LocalDate.of(2022, 5, 5), LocalDate.of(2022, 5, 10));
        RoomChargeDistributionResponse roomChargeDistribution = roomService.getRoomChargeDistribution(
                roomChargeDistributionRequest);

        // then
        assertThat(roomChargeDistribution.getMinRoomCharge()).isEqualTo(MIN_ROOM_CHARGE);
        assertThat(roomChargeDistribution.getMaxRoomCharge()).isEqualTo(MAX_ROOM_CHARGE);
        assertThat(roomChargeDistribution.getGraph()
                .get(room2.getDistributedRoomCharge(RoomService.DISTRIBUTION_UNIT))).isEqualTo(1);
        assertThat(roomChargeDistribution.getGraph()
                .get(room3.getDistributedRoomCharge(RoomService.DISTRIBUTION_UNIT))).isEqualTo(1);
    }


}
