'use client'

import React, { useEffect, useState } from 'react';
import SocialShare from "../SocialShare";
import { usePathname } from "next/navigation";
import { IRocket } from "./types";

interface RocketCardProps {
  rocket: {
    rocket_id: number;
    rocket_name: string;
    description: string;
    flickr_images: string[];
  };
}

const RocketCard: React.FC<IRocket> = ({ rocket }) => {
  const pathname = usePathname()
  const [currentUrl, setCurrentURL] = useState('')

  useEffect(() => {
    setCurrentURL(new URL(pathname, window.location.origin).href)
  }, [pathname])

  return (
    <div className='flex flex-col gap-4'>
      <figure>
        <img
          src={rocket.flickr_images[0]}
          alt={rocket.rocket_name}
          width={640}
          height={480}
          className='w-full h-60 object-cover data-la'
        />
      </figure>
      <div className='flex flex-col gap-4 mb-4'>
        <h2 className='text-3xl font-semibold'>{rocket.rocket_name}</h2>
        <p>{rocket.description}</p>
      </div>
      <div className='flex items-center justify-between'>
        <a
          href={`/spacex/rockets/${rocket.rocket_id}`}
          className='btn btn-primary'
        >
          Take a look!
        </a>
        <SocialShare postUrl={currentUrl} />
      </div>
    </div>
  );
};

export default RocketCard;
