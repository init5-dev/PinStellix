'use client'

import React, { useEffect, useState } from 'react';
import { ICore } from "@/app/lib/components/pins/types";
import Loading from "@/app/lib/components/Loading";
import CoreCard from "@/app/lib/components/pins/CoreCard";


const CoresPages: React.FC = () => {
  const [cores, setCores] = useState<ICore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCores = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/cores'); 
        const data = await response.json();
        setCores(data);
      } catch (error) {
        console.error('Error fetching cores:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCores();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-semibold mb-8 text-center lg:text-left'>SpaceX Cores</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {cores.map((core) => (
          <CoreCard key={core.id} core={core} />
        ))}
      </div>
    </div>
  );
};

export default CoresPages;
