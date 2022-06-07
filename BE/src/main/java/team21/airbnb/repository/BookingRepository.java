package team21.airbnb.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import team21.airbnb.domain.Booking;

@Repository
public class BookingRepository {

    @PersistenceContext
    private EntityManager em;

    public Long save(Booking booking) {
        em.persist(booking);
        return booking.getId();
    }

}
