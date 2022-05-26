package team21.airbnb.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.time.LocalDate;
import java.util.HashMap;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import team21.airbnb.dto.request.RoomChargeDistributionRequest;
import team21.airbnb.dto.response.RoomChargeDistributionResponse;
import team21.airbnb.service.RoomService;

@WebMvcTest(RoomController.class)
class RoomControllerTest {

    public static final int MIN_ROOM_CHARGE = 10005;
    public static final int MAX_ROOM_CHARGE = MIN_ROOM_CHARGE + 1000;

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private RoomService roomService;
    @Autowired
    private ObjectMapper objectMapper;

    @Test
    @DisplayName("가격 분포 요청 시 응답한다")
    public void getChargeDistribution() throws Exception {
        // given
        HashMap<Integer, Integer> graph = new HashMap<>();
        graph.put(10010, 2);
        graph.put(11010, 1);
        given(roomService.getRoomChargeDistribution(any()))
                .willReturn(new RoomChargeDistributionResponse(MIN_ROOM_CHARGE, MAX_ROOM_CHARGE,
                        graph));

        String content = objectMapper.writeValueAsString(new RoomChargeDistributionRequest(
                LocalDate.of(2022, 5, 5), LocalDate.of(2022, 5, 10)
        ));
        // when & then
        mockMvc.perform(get("/rooms/charge_distribution")
                        .content(content)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.minRoomCharge").value(MIN_ROOM_CHARGE))
                .andExpect(jsonPath("$.maxRoomCharge").value(MAX_ROOM_CHARGE))
                .andExpect(jsonPath("$.graph['10010']").value(2))
                .andExpect(jsonPath("$.graph['11010']").value(1))
                .andDo(print());


    }

}
