package team21.airbnb.service;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team21.airbnb.domain.Room;
import team21.airbnb.dto.response.RoomChargeDistributionResponse;
import team21.airbnb.repository.RoomRepository;

@SpringBootTest
@Transactional
class RoomServiceTest {


    public static final int MIN_ROOM_CHARGE = 10005;
    public static final int MAX_ROOM_CHARGE = MIN_ROOM_CHARGE + 1000;

    @Autowired RoomRepository roomRepository;
    @Autowired RoomService roomService;

    @Test
    public void getRoomChargeDistributionTest() {
        // given
        Room room1 = Room.builder().name("room1").roomCharge(MIN_ROOM_CHARGE).build();
        Room room2 = Room.builder().name("room2").roomCharge(ceil(MIN_ROOM_CHARGE)).build();
        Room room3 = Room.builder().name("room3").roomCharge(MAX_ROOM_CHARGE).build();

        roomRepository.save(room1);
        roomRepository.save(room2);
        roomRepository.save(room3);

        // when
        RoomChargeDistributionResponse roomChargeDistribution = roomService.getRoomChargeDistribution();

        // then
        assertThat(roomChargeDistribution.getMinRoomCharge()).isEqualTo(MIN_ROOM_CHARGE);
        assertThat(roomChargeDistribution.getMaxRoomCharge()).isEqualTo(MAX_ROOM_CHARGE);
        assertThat(roomChargeDistribution.getGraph().get(ceil(MIN_ROOM_CHARGE))).isEqualTo(2);
        assertThat(roomChargeDistribution.getGraph().get(ceil(MAX_ROOM_CHARGE))).isEqualTo(1);
    }

    private int ceil(int num) {
        return (int) (Math.ceil(num / RoomService.DIGIT) * RoomService.DIGIT);
    }

}
