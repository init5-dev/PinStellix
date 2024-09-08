'use client'

import React, { useEffect, useState } from 'react';
import { IHistory } from "@/app/lib/components/pins/types";
import Loading from "@/app/lib/components/Loading";
import HistoryCard from "@/app/lib/components/pins/HistoryCard";


const HistoriesPages: React.FC = () => {
  const [histories, setHistories] = useState<IHistory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistories = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/history'); 
        const data = await response.json();
        setHistories(data);
      } catch (error) {
        console.error('Error fetching histories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistories();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-semibold mb-8 text-center lg:text-left'>SpaceX History</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {histories.map((history) => (
          <HistoryCard key={history.title} history={history} />
        ))}
      </div>
    </div>
  );
};

export default HistoriesPages;
