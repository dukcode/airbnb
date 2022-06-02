package team21.airbnb.dto.response;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Getter;
import team21.airbnb.domain.Amenity;
import team21.airbnb.domain.Room;
import team21.airbnb.domain.Room.RoomType;
import team21.airbnb.domain.Room.SpaceType;
import team21.airbnb.domain.RoomAmenity;
import team21.airbnb.domain.embeddable.ReviewStatus;
import team21.airbnb.domain.embeddable.StayDate;

@Getter @AllArgsConstructor public class RoomSearchResponse {

    private String imageUrl;
    private RoomType roomType;
    private String name;
    private Integer maxNumOfGuests;
    private SpaceType spaceType;
    private Integer numOfBedrooms;
    private Integer numOfBeds;
    private Integer numOfBaths;
    private List<String> amenities;
    private Integer roomCharge;
    private Integer allAmount;
    private Double rate;
    private Integer numOfReviews;

    public static RoomSearchResponse from(Room room, StayDate stayDate) {

        ReviewStatus reviewStatus = room.getReviewStatus();

        List<String> amenities = room.getRoomAmenities().stream()
                .map(RoomAmenity::getAmenity)
                .sorted(Comparator.comparingLong(Amenity::getId))
                .limit(4)
                .map(Amenity::getName)
                .collect(Collectors.toList());

        return new RoomSearchResponse(room.getImageUrl(),
                room.getRoomType(),
                room.getName(),
                room.getMaxNumOfGuests(),
                room.getSpaceType(),
                room.getNumOfBedrooms(),
                room.getNumOfBeds(),
                room.getNumOfBaths(),
                amenities,
                room.getRoomCharge(),
                room.getAllAmount(stayDate),
                reviewStatus.getRate(),
                reviewStatus.getCount());
    }
}
