package team21.airbnb.controller;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import team21.airbnb.domain.Room;
import team21.airbnb.dto.response.RoomChargeDistributionResponse;
import team21.airbnb.repository.RoomRepository;
import team21.airbnb.service.RoomService;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class HomeControllerTest {

    @LocalServerPort int port;

    @Autowired TestRestTemplate restTemplate;

    public static final int MIN_ROOM_CHARGE = 10005;
    public static final int MAX_ROOM_CHARGE = MIN_ROOM_CHARGE + 1000;


    @Autowired RoomRepository roomRepository;
    @Autowired RoomService roomService;
    @Autowired HomeController homeController;

    @Test
    @DisplayName("가격 분포 요청 시 응답한다")
    public void getChargeDistribution() {
        // given
        Room room1 = Room.builder().name("room1").roomCharge(MIN_ROOM_CHARGE).build();
        Room room2 = Room.builder().name("room2").roomCharge(MIN_ROOM_CHARGE).build();
        Room room3 = Room.builder().name("room3").roomCharge(MAX_ROOM_CHARGE).build();

        roomService.save(room1);
        roomService.save(room2);
        roomService.save(room3);

        String url = "http://localhost:" + port + "/room_charge_distribution";

        // when
        RoomChargeDistributionResponse roomChargeDistribution
                = restTemplate.getForObject(url, RoomChargeDistributionResponse.class);

        // then
        assertThat(roomChargeDistribution.getMinRoomCharge()).isEqualTo(MIN_ROOM_CHARGE);
        assertThat(roomChargeDistribution.getMaxRoomCharge()).isEqualTo(MAX_ROOM_CHARGE);
        assertThat(roomChargeDistribution.getGraph()
                .get(room1.getDistributedRoomCharge(RoomService.DISTRIBUTION_RANGE))).isEqualTo(2);
        assertThat(roomChargeDistribution.getGraph()
                .get(room3.getDistributedRoomCharge(RoomService.DISTRIBUTION_RANGE))).isEqualTo(1);
    }

}
