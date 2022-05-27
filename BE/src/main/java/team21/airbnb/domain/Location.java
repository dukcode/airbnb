package team21.airbnb.domain;

import javax.persistence.Embeddable;
import lombok.Getter;

@Embeddable
@Getter
public class Location {

    private Double latitude;

    private Double longitude;

}
