package team21.airbnb.domain.embeddable;

import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Embeddable
public class RoomCondition {

    private Integer maxNumOfGuests;

    private Integer numOfBedrooms;

    private Integer numOfBeds;

    private Integer numOfBaths;

}
