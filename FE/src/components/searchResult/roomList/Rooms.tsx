import React from 'react';

import * as Styled from 'components/searchResult/roomList/roomList.style';
import Room from './Room';

function Rooms() {
  const fakeDB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Styled.RoomsWrapper>
      {fakeDB.map((data) => {
        return (
          <div>
            <Room />
            <Styled.Line />
          </div>
        );
      })}
    </Styled.RoomsWrapper>
  );
}

export default Rooms;
