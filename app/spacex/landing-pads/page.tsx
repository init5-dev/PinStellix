'use client'

import React, { useEffect, useState } from 'react';
import { ILandingPad } from "@/app/lib/components/pins/types";
import Loading from "@/app/lib/components/Loading";
import LandingPadCard from "@/app/lib/components/pins/LandingPadCard";


const LandingPadsPage: React.FC = () => {
  const [lpads, setLPads] = useState<ILandingPad[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLandingPads = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/landpads'); 
        const data = await response.json();
        setLPads(data);
      } catch (error) {
        console.error('Error fetching landpads:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLandingPads();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-semibold mb-8 text-center lg:text-left'>SpaceX Cores</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {lpads.map((lpad) => (
          <LandingPadCard key={lpad.id} landingPad={lpad} />
        ))}
      </div>
    </div>
  );
};

export default LandingPadsPage;
