package team21.airbnb.repository;

import java.time.LocalDate;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import team21.airbnb.domain.Room;

@Repository
public class RoomRepository {

    @PersistenceContext
    private EntityManager em;

    public List<Room> findAll() {
        return em.createQuery("select r from Room r", Room.class)
                .getResultList();
    }

    public List<Room> findAvailableRoomsOrderByRoomChargeAcsBetween(LocalDate checkInDate,
            LocalDate checkOutDate) {
        return em.createQuery(
                        "select r from Room r where not exists"
                                + " (select b from Booking b"
                                + " where (b.room = r) and not ((b.stayDate.checkOutDate < :checkInDate)"
                                + " or (b.stayDate.checkInDate > :checkOutDate)))"
                                + " order by r.roomCharge asc",
                        Room.class)
                .setParameter("checkInDate", checkInDate)
                .setParameter("checkOutDate", checkOutDate)
                .getResultList();
    }

    public Long save(Room room) {
        em.persist(room);
        return room.getId();
    }

}
