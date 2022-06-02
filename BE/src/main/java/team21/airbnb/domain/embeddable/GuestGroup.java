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
public class GuestGroup {

    private Integer numOfAdults;

    private Integer numOfChildren;

    private Integer numOfInfants;

}
