'use client'

import React, { useEffect, useState } from 'react';
import { ICapsule } from "@/app/lib/components/pins/types";
import Loading from "@/app/lib/components/Loading";
import CapsuleCard from "@/app/lib/components/pins/CapsuleCard";


const CapsulesPage: React.FC = () => {
  const [capsules, setCapsules] = useState<ICapsule[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCapsules = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/capsules'); 
        const data = await response.json();
        setCapsules(data);
      } catch (error) {
        console.error('Error fetching capsules:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCapsules();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-semibold mb-8'>SpaceX Capsules</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {capsules.map((capsule) => (
          <CapsuleCard key={capsule.capsule_id} capsule={capsule} />
        ))}
      </div>
    </div>
  );
};

export default CapsulesPage;
