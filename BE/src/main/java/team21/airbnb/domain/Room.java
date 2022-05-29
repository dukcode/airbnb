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

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "room_id")
    private Long id;

    @Enumerated(EnumType.STRING)
    private RoomType roomType;

    @Enumerated(EnumType.STRING)
    private SpaceType spaceType;

    @Column(length = 800)
    private String description;

    private String name;

    private Integer maxNumOfGuests;

    private Integer numOfBedrooms;

    private Integer numOfBaths;

    private Integer cleaningFee;

    private Integer roomCharge;

    private Integer weeklyDiscountPercent;

    @Embedded
    private Location location;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "host_id")
    private User host;

    @Builder
    public Room(RoomType roomType, SpaceType spaceType, String description, String name,
            Integer maxNumOfGuests, Integer numOfBedrooms, Integer numOfBaths,
            Integer cleaningFee, Integer roomCharge, Integer weeklyDiscountPercent,
            Location location, User host) {
        this.roomType = roomType;
        this.spaceType = spaceType;
        this.description = description;
        this.name = name;
        this.maxNumOfGuests = maxNumOfGuests;
        this.numOfBedrooms = numOfBedrooms;
        this.numOfBaths = numOfBaths;
        this.cleaningFee = cleaningFee;
        this.roomCharge = roomCharge;
        this.weeklyDiscountPercent = weeklyDiscountPercent;
        this.location = location;
        this.host = host;
    }

    public int getDistributedRoomCharge(int distributionUnit) {
        // 올림
        return ((roomCharge + (distributionUnit - 1)) / distributionUnit) * distributionUnit;
    }
}
