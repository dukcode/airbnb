import { client, PATH } from './client';

interface filteredProps {
  filteredData: {
    checkInDate: string;
    checkOutDate: string;
    minRoomCharge?: number;
    maxRoomCharge?: number;
    numOfGuests?: number;
    numOfAdults?: number;
    numOfChildren?: number;
    numOfInfants?: number;
  };
}
const roomListApis = {
  getFilteredRooms: async ({
    filteredData: {
      checkInDate,
      checkOutDate,
      minRoomCharge,
      maxRoomCharge,
      numOfGuests,
      numOfAdults,
      numOfChildren,
      numOfInfants,
    },
  }: filteredProps) => {
    const options = {
      params: {
        checkInDate,
        checkOutDate,
        minRoomCharge,
        maxRoomCharge,
        numOfGuests,
        numOfAdults,
        numOfChildren,
        numOfInfants,
      },
    };
    const response = await client.get(PATH, options);
    return response.data;
  },
};

export default roomListApis;
