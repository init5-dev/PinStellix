'use client'

import React, { useEffect, useState } from 'react';
import { IDragon } from "@/app/lib/components/pins/types";
import Loading from "@/app/lib/components/Loading";
import DragonCard from "@/app/lib/components/pins/DragonCard";


const DragonsPage: React.FC = () => {
  const [dragons, setDragons] = useState<IDragon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch rockets data from API or service
    const fetchDragons = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/dragons'); 
        const data = await response.json();
        setDragons(data);
      } catch (error) {
        console.error('Error fetching dragons:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDragons();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-4xl font-semibold mb-8'>SpaceX Dragons</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {dragons.map((dragon) => (
          <DragonCard key={dragon.id} dragon={dragon} />
        ))}
      </div>
    </div>
  );
};

export default DragonsPage;
