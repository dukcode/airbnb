package team21.airbnb.domain.embeddable;

import java.time.LocalDate;
import java.time.Period;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Embeddable
public class StayDate {

    private LocalDate checkInDate;
    private LocalDate checkOutDate;

    public Integer getDays() {
        return Period.between(checkInDate, checkOutDate).getDays();
    }

    public Boolean stayMoreThanAWeek() {
        return getDays() >= 6;

    }

}
