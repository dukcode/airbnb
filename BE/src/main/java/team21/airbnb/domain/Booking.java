package team21.airbnb.domain;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team21.airbnb.domain.embeddable.GuestGroup;
import team21.airbnb.domain.embeddable.StayDate;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Booking {

    public enum BookingStatus {
        BOOKED, CANCELED;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id")
    private Long id;

    @Enumerated(EnumType.STRING)
    private BookingStatus status;

    @Embedded
    private StayDate stayDate;

    @Embedded
    private GuestGroup guestGroup;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Room room;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public Booking(BookingStatus status, StayDate stayDate,
            GuestGroup guestGroup, Room room, User user) {
        this.status = status;
        this.stayDate = stayDate;
        this.guestGroup = guestGroup;
        this.room = room;
        this.user = user;
    }
}
