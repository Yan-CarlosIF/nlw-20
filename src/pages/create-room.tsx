import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

interface GetRoomsApiResponse {
  id: string;
  name: string;
}

export function CreateRoom() {
  const { data: rooms, isLoading: isRoomsLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms');
      const data: GetRoomsApiResponse[] = await response.json();

      return data;
    },
  });

  return (
    <div>
      <h1>Create Room Page</h1>

      {isRoomsLoading && <p>Loading rooms...</p>}
      <div className="flex flex-col gap-1">
        {rooms?.map((room) => (
          <Link className="underline" key={room.id} to={`/room/${room.id}`}>
            {room.name}
          </Link>
        ))}
      </div>

      <Link className="underline" to="/room">
        Acessar sala
      </Link>
    </div>
  );
}
