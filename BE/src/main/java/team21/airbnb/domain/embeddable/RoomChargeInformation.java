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
public class RoomChargeInformation {

    private static final double serviceFeeRatio = 0.14;
    private static final double taxRatio = 0.1;

    private Integer roomCharge;
    private Integer cleaningFee;
    private Double weeklyDiscountRatio;

    public Integer getWeeklyDiscount(StayDate stayDate) {
        if (stayDate.stayMoreThanAWeek()) {
            return (int) (getAllRoomCharge(stayDate) * weeklyDiscountRatio);
        }
        return 0;
    }

    public Integer getServiceFee(StayDate stayDate) {
        return (int) (getAllRoomCharge(stayDate) * serviceFeeRatio);
    }

    public Integer getAllRoomCharge(StayDate stayDate) {
        return getRoomCharge() * stayDate.getDays()
                + getCleaningFee();
    }

    public Integer getTax(StayDate stayDate) {
        return (int) (getServiceFee(stayDate) * taxRatio);
    }

    public Integer getTotalCharge(StayDate stayDate) {
        return getAllRoomCharge(stayDate) - getWeeklyDiscount(stayDate) + getCleaningFee()
                + getServiceFee(stayDate) + getTax(stayDate);
    }
}
