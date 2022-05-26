package team21.airbnb.controller;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.HashMap;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import team21.airbnb.domain.Room;
import team21.airbnb.dto.response.RoomChargeDistributionResponse;
import team21.airbnb.service.RoomService;

@WebMvcTest(HomeController.class)
class HomeControllerTest {

    public static final int MIN_ROOM_CHARGE = 10005;
    public static final int MAX_ROOM_CHARGE = MIN_ROOM_CHARGE + 1000;

    @Autowired MockMvc mockMvc;
    @MockBean RoomService roomService;

    @Test
    @DisplayName("가격 분포 요청 시 응답한다")
    public void getChargeDistribution() throws Exception {
        // given
        Room room1 = Room.builder().name("room1").roomCharge(MIN_ROOM_CHARGE).build();
        Room room2 = Room.builder().name("room2").roomCharge(MIN_ROOM_CHARGE).build();
        Room room3 = Room.builder().name("room3").roomCharge(MAX_ROOM_CHARGE).build();

        HashMap<Integer, Integer> graph = new HashMap<>();
        graph.put(10010, 2);
        graph.put(11010, 1);
        given(roomService.getRoomChargeDistribution())
                .willReturn(new RoomChargeDistributionResponse(MIN_ROOM_CHARGE, MAX_ROOM_CHARGE,
                        graph));

        // when & then
        mockMvc.perform(get("/room_charge_distribution"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.minRoomCharge").value(MIN_ROOM_CHARGE))
                .andExpect(jsonPath("$.maxRoomCharge").value(MAX_ROOM_CHARGE))
                .andExpect(jsonPath("$.graph['10010']").value(2))
                .andExpect(jsonPath("$.graph['11010']").value(1))
                .andDo(print());


    }

}
