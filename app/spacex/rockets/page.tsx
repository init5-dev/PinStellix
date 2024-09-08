'use client'

import React, { useEffect, useState } from 'react';
import RocketCard from "@/app/lib/components/pins/RocketCard";
import { IRocket } from "@/app/lib/components/pins/types";
import Loading from "@/app/lib/components/Loading";


const RocketsPage: React.FC = () => {
  const [rockets, setRockets] = useState<IRocket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/rockets'); 
        const data = await response.json();
        setRockets(data);
      } catch (error) {
        console.error('Error fetching rockets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRockets();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-semibold mb-8 text-center lg:text-left'>SpaceX Rockets</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {rockets.map((rocket) => (
          <RocketCard key={rocket.id} rocket={rocket} />
        ))}
      </div>
    </div>
  );
};

export default RocketsPage;
