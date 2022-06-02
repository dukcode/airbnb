package team21.airbnb.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import team21.airbnb.domain.Room;
import team21.airbnb.domain.embeddable.GuestGroup;
import team21.airbnb.domain.embeddable.RoomChargeInformation;
import team21.airbnb.domain.embeddable.StayDate;

@Getter
@AllArgsConstructor
public class RoomDetailResponse {

    private Long id;
    private Integer roomCharge;
    private Integer numDays;
    private Integer AllRoomCharge;
    private Integer weeklyDiscount;
    private Integer cleaningFee;
    private Integer serviceFee;
    private Integer tax;
    private Integer totalCharge;
    private Integer numOfGuests;
    private Integer numOfAdults;
    private Integer numOfChildren;
    private Integer numOfInfants;

    public static RoomDetailResponse from(Room room, StayDate stayDate,
            GuestGroup guestGroup) {

        RoomChargeInformation chargeInfo = room.getRoomChargeInfo();

        return new RoomDetailResponse(
                room.getId(),
                chargeInfo.getRoomCharge(),
                stayDate.getDays(),
                chargeInfo.getAllRoomCharge(stayDate),
                chargeInfo.getWeeklyDiscount(stayDate),
                chargeInfo.getCleaningFee(),
                chargeInfo.getServiceFee(stayDate),
                chargeInfo.getTax(stayDate),
                chargeInfo.getTotalCharge(stayDate),
                guestGroup.getNumOfGuests(),
                guestGroup.getNumOfAdults(),
                guestGroup.getNumOfChildren(),
                guestGroup.getNumOfInfants()
        );
    }
}
