'use client'

import React, { useEffect, useState } from 'react';
import SocialShare from "../SocialShare";
import { usePathname } from "next/navigation";
import { IRocket } from "./types";

const RocketCard = ({ rocket } : {rocket: IRocket}) => {
  const pathname = usePathname()
  const [currentUrl, setCurrentURL] = useState('')

  useEffect(() => {
    setCurrentURL(new URL(pathname, window.location.origin).href)
  }, [pathname])

  return (
    <div className='flex flex-col gap-4 p-4 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
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
        <p className="h-20 break-words line-clamp-5">{rocket.description}</p>
      </div>
      <div className='flex items-center justify-between gap-4'>
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
