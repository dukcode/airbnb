import React from 'react';

import * as Styled from 'components/searchResult/roomList/roomList.style';
import HeartIcon from 'components/Icons/heartIcon';
import StarIcon from 'components/Icons/StarIcon';
import { moneyToWon } from 'utils/utils';

function Room() {
  return (
    <Styled.RoomWrapper>
      <Styled.Thumbnail />
      <Styled.Description>
        <Styled.InfoWrapper>
          <Styled.Info>
            <Styled.Location>서초구의 아파트 전체</Styled.Location>
            <Styled.RoomTitle>Spacious and Comfortable cozy house #4</Styled.RoomTitle>
            <Styled.Option>
              최대 인원 3명·원룸·침대 1개·욕실 1개 <br />
              주방·무선 인터넷·에어컨·헤어드라이어
            </Styled.Option>
          </Styled.Info>
          <HeartIcon size={{ width: '21', height: '18.2' }} />
        </Styled.InfoWrapper>
        <Styled.PointWrapper>
          <Styled.Point>
            <StarIcon size={{ width: '13.33', height: '12.68' }} />
            <Styled.Rating>4.80</Styled.Rating>
            <Styled.Review>(후기 127개)</Styled.Review>
          </Styled.Point>
          <Styled.Charge>
            <Styled.DayChargeWrapper>
              <Styled.DayCharge>{moneyToWon(82953)}</Styled.DayCharge>
              <Styled.Day>/박</Styled.Day>
            </Styled.DayChargeWrapper>
            <Styled.TotalCost>총액 {moneyToWon(1493159)}</Styled.TotalCost>
          </Styled.Charge>
        </Styled.PointWrapper>
      </Styled.Description>
    </Styled.RoomWrapper>
  );
}

export default Room;
