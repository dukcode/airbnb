package team21.airbnb.repository;

import java.util.List;
import javax.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import team21.airbnb.domain.Room;

@Repository
public class RoomRepository {

    private final EntityManager em;

    public RoomRepository(EntityManager em) {
        this.em = em;
    }

    public List<Room> findAll() {
        return em.createQuery("select r from Room r", Room.class)
                .getResultList();
    }

    public Long save(Room room) {
        em.persist(room);
        return room.getId();
    }

}
