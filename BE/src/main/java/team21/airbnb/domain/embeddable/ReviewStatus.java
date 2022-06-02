package team21.airbnb.domain.embeddable;

import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Embeddable
public class ReviewStatus {

    private Double rate;
    private Integer count;
}
