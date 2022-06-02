package team21.airbnb.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import team21.airbnb.domain.embeddable.GuestGroup;
import team21.airbnb.domain.embeddable.Location;
import team21.airbnb.domain.embeddable.StayDate;

@Getter
@AllArgsConstructor
public class RoomSearchCondition {

    private StayDate stayDate;
    private ChargeRange chargeRange;

    private GuestGroup guestGroup;

    private Location northWestLocation;
    private Location southEastLocation;

    @Getter
    @AllArgsConstructor
    public static class ChargeRange {

        private Integer min;
        private Integer max;
    }
}
