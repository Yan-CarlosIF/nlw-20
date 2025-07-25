import { useQuery } from '@tanstack/react-query';
import type { GetRoomsResponse } from './types/get-room-response';

export function useRooms() {
  const { data: rooms, isLoading: isLoadingRooms } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms');
      const data: GetRoomsResponse = await response.json();

      return data;
    },
  });

  return { rooms, isLoadingRooms };
}
