package team21.airbnb.dto.request;

import java.time.LocalDate;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@ToString
public class RoomSearchCondition {

    private Double westLongitude;

    private Double northLatitude;

    private Double eastLongitude;

    private Double southLatitude;

    @DateTimeFormat(iso = ISO.DATE)
    private LocalDate checkInDate;

    @DateTimeFormat(iso = ISO.DATE)
    private LocalDate checkOutDate;

    private Integer minRoomCharge;

    private Integer maxRoomCharge;

    private Integer numOfGuests;

    private Integer numOfAdults;

    private Integer numOfChildren;

    private Integer numOfInfants;

}
