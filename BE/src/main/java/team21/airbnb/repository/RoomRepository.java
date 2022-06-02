package team21.airbnb.repository;

import java.time.LocalDate;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import team21.airbnb.domain.Room;
import team21.airbnb.dto.request.RoomSearchCondition;

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
                                + " order by r.roomChargeInfo.roomCharge asc",
                        Room.class)
                .setParameter("checkInDate", checkInDate)
                .setParameter("checkOutDate", checkOutDate)
                .getResultList();
    }

    public Long save(Room room) {
        em.persist(room);
        return room.getId();
    }

    public List<Room> searchWithCondition(RoomSearchCondition condition) {
        return em.createQuery(
                        "select r from Room r where (not exists"
                                + " (select b from Booking b"
                                + " where (b.room = r) and not ((b.stayDate.checkOutDate < :checkInDate)"
                                + " or (b.stayDate.checkInDate > :checkOutDate))))"
                                + " and (r.roomCondition.maxNumOfGuests >= :numOfGuests)"
                                + " and (r.roomChargeInfo.roomCharge between :minRoomCharge and :maxRoomCharge)"
                                + " and (r.location.longitude between :minLongitude and :maxLongitude)"
                                + " and (r.location.latitude between :minLatitude and :maxLatitude)",
                        Room.class)
                .setParameter("checkInDate", condition.getStayDate().getCheckInDate())
                .setParameter("checkOutDate", condition.getStayDate().getCheckOutDate())
                .setParameter("numOfGuests", condition.getGuestGroup().getNumOfGuests())
                .setParameter("minRoomCharge", condition.getChargeRange().getMin())
                .setParameter("maxRoomCharge", condition.getChargeRange().getMax())
                .setParameter("minLongitude", condition.getNorthWestLocation().getLongitude())
                .setParameter("maxLongitude", condition.getSouthEastLocation().getLongitude())
                .setParameter("minLatitude", condition.getSouthEastLocation().getLatitude())
                .setParameter("maxLatitude", condition.getNorthWestLocation().getLatitude())
                .getResultList();
    }
}
