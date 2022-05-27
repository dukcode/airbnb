package team21.airbnb.dto.request;

import java.time.LocalDate;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team21.airbnb.domain.Location;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class RoomSearchRequest {

    private LocalDate checkInDate;
    private LocalDate checkOutDate;

    private Integer minRoomCharge;
    private Integer maxRoomCharge;

    private Integer numOfAdults;
    private Integer numOfChildren;
    private Integer numOfInfants;

    private Location northWest;
    private Location southEast;

}
