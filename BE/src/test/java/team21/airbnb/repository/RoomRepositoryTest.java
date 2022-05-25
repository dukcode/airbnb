package team21.airbnb.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team21.airbnb.domain.Room;

@SpringBootTest
@Transactional
class RoomRepositoryTest {

    @Autowired
    RoomRepository roomRepository;

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
}
