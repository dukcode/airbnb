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
import team21.airbnb.domain.embeddable.Location;
import team21.airbnb.domain.embeddable.ReviewStatus;
import team21.airbnb.domain.embeddable.RoomChargeInformation;
import team21.airbnb.domain.embeddable.RoomCondition;

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

    private String name;

    @Column(length = 800)
    private String description;

    private String imageUrl;

    @Embedded
    private RoomCondition roomCondition;

    @Embedded
    private RoomChargeInformation roomChargeInfo;

    @Embedded
    private ReviewStatus reviewStatus;

    @Embedded
    private Location location;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "host_id")
    private User host;

    @OneToMany(mappedBy = "room")
    private List<RoomImage> roomImages = new ArrayList<>();

    @OneToMany(mappedBy = "room")
    private List<RoomAmenity> roomAmenities = new ArrayList<>();

    @OneToMany(mappedBy = "room")
    private List<Review> reviews = new ArrayList<>();

    @Builder
    public Room(RoomType roomType, SpaceType spaceType, String name, String description,
            String imageUrl, RoomCondition roomCondition,
            RoomChargeInformation roomChargeInfo,
            ReviewStatus reviewStatus, Location location) {
        this.roomType = roomType;
        this.spaceType = spaceType;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.roomCondition = roomCondition;
        this.roomChargeInfo = roomChargeInfo;
        this.reviewStatus = reviewStatus;
        this.location = location;
    }

}
