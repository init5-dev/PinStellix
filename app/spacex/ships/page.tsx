'use client'

import React, { useEffect, useState } from 'react';
import ShipCard from "@/app/lib/components/pins/ShipCard";
import { IShip } from "@/app/lib/components/pins/types";
import Loading from "@/app/lib/components/Loading";


const ShipsPage: React.FC = () => {
  const [ships, setShips] = useState<IShip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShips = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/ships/');
        const data = await response.json();
        setShips(data);
      } catch (error) {
        console.error('Error fetching ships:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShips();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-semibold mb-8'>SpaceX Ships</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {ships.map((ship) => (
          <ShipCard key={ship.id} ship={ship} />
        ))}
      </div>
    </div>
  );
};

export default ShipsPage;
