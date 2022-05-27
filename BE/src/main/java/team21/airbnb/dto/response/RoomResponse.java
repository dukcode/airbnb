package team21.airbnb.dto.response;

import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team21.airbnb.domain.RoomType;
import team21.airbnb.domain.SpaceType;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class RoomResponse {

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
}
