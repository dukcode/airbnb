package team21.airbnb.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import org.springframework.stereotype.Repository;
import team21.airbnb.domain.Room;
import team21.airbnb.dto.request.RoomSearchCondition;

@Repository
public class RoomRepository {

    public static final int COUNT_LIMIT = 30;

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

    public List<Room> searchWithCondition(RoomSearchCondition condition, Integer page) {
        String jpql = "select r from Room r where (not exists"
                + " (select b from Booking b"
                + " where (b.room = r) and not ((b.stayDate.checkOutDate < :checkInDate)"
                + " or (b.stayDate.checkInDate > :checkOutDate))))";

        if (!condition.isNumOfGuestsNull()) {
            jpql += " and (r.roomCondition.maxNumOfGuests >= :numOfGuests)";
        }

        if (!condition.isChargeRangeNull()) {
            jpql += " and (r.roomChargeInfo.roomCharge between :minRoomCharge and :maxRoomCharge)";
        }

        if (!condition.isLocationNull()) {
            jpql += " and (r.location.longitude between :minLongitude and :maxLongitude)";
            jpql += " and (r.location.latitude between :minLatitude and :maxLatitude)";
        }

        jpql += " order by r.reviewStatus.count desc";

        TypedQuery<Room> query = em.createQuery(jpql, Room.class)
                .setParameter("checkInDate", condition.getCheckInDate())
                .setParameter("checkOutDate", condition.getCheckOutDate());

        if (!condition.isNumOfGuestsNull()) {
            query = query.setParameter("numOfGuests", condition.getNumOfGuests());
        }

        if (!condition.isChargeRangeNull()) {
            query = query
                    .setParameter("minRoomCharge", condition.getMinRoomCharge())
                    .setParameter("maxRoomCharge", condition.getMaxRoomCharge());
        }

        if (!condition.isLocationNull()) {
            query = query
                    .setParameter("minLongitude", condition.getSouthLongitude())
                    .setParameter("maxLongitude", condition.getNorthLongitude())
                    .setParameter("minLatitude", condition.getWestLatitude())
                    .setParameter("maxLatitude", condition.getEastLatitude());
        }

        return query
                .setFirstResult(COUNT_LIMIT * (page - 1))
                .setMaxResults(COUNT_LIMIT)
                .getResultList();
    }

    public Optional<Room> findOne(Long id) {
        return Optional.ofNullable(em.find(Room.class, id));
    }
}
