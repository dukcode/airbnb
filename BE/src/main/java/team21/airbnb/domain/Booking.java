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
import team21.airbnb.domain.embeddable.StayDate;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id")
    private Long id;

    @Embedded
    private StayDate stayDate;

    private Integer numOfAdults;

    private Integer numOfChildren;

    private Integer numOfInfants;

    @Enumerated(EnumType.STRING)
    private BookingStatus status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Room room;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public Booking(Long id, StayDate stayDate, Integer numOfAdults, Integer numOfChildren,
            Integer numOfInfants, BookingStatus status, Room room, User user) {
        this.id = id;
        this.stayDate = stayDate;
        this.numOfAdults = numOfAdults;
        this.numOfChildren = numOfChildren;
        this.numOfInfants = numOfInfants;
        this.status = status;
        this.room = room;
        this.user = user;
    }
}
