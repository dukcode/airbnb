package team21.airbnb.domain;

import java.util.ArrayList;
import java.util.List;
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
import javax.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team21.airbnb.domain.embeddable.ReviewStatus;
import team21.airbnb.domain.embeddable.StayDate;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Room {

    public enum RoomType {
        APARTMENT, HOUSE, SECONDARY_UNIT, UNIQUE_SPACE, BED_AND_BREAKFAST, BOUTIQUE_HOTEL;
    }

    public enum SpaceType {
        ENTIRE, PRIVATE, SHARED;
    }

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

    private String imageUrl;

    private Integer maxNumOfGuests;

    private Integer numOfBedrooms;

    private Integer numOfBeds;

    private Integer numOfBaths;

    private Integer cleaningFee;

    private Integer roomCharge;

    private Integer weeklyDiscountPercent;

    @Embedded
    private ReviewStatus reviewStatus;

    @OneToMany(mappedBy = "room")
    private List<RoomImage> roomImages = new ArrayList<>();

    @OneToMany(mappedBy = "room")
    private List<RoomAmenity> roomAmenities = new ArrayList<>();

    @OneToMany(mappedBy = "room")
    private List<Review> reviews = new ArrayList<>();

    @Embedded
    private Location location;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "host_id")
    private User host;

    @Builder
    public Room(Long id, RoomType roomType, SpaceType spaceType, String description,
            String name, String imageUrl, Integer maxNumOfGuests, Integer numOfBedrooms,
            Integer numOfBeds, Integer numOfBaths, Integer cleaningFee, Integer roomCharge,
            Integer weeklyDiscountPercent, List<RoomImage> roomImages,
            Location location, User host) {
        this.id = id;
        this.roomType = roomType;
        this.spaceType = spaceType;
        this.description = description;
        this.name = name;
        this.imageUrl = imageUrl;
        this.maxNumOfGuests = maxNumOfGuests;
        this.numOfBedrooms = numOfBedrooms;
        this.numOfBeds = numOfBeds;
        this.numOfBaths = numOfBaths;
        this.cleaningFee = cleaningFee;
        this.roomCharge = roomCharge;
        this.weeklyDiscountPercent = weeklyDiscountPercent;
        this.roomImages = roomImages;
        this.location = location;
        this.host = host;
    }

    public Integer getAllAmount(StayDate stayDate) {
        return roomCharge * stayDate.getDays() + cleaningFee;
    }
}
