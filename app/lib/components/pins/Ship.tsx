'use client'

import React, { useEffect, useState } from 'react'
import { IShip } from './types'
import SocialShare from '../SocialShare'
import { usePathname } from 'next/navigation'

const Ship = ({ ship }: { ship: IShip }) => {
  const pathname = usePathname()
  const [currentUrl, setCurrentURL] = useState('')

  useEffect(() => {
    setCurrentURL(new URL(pathname, window.location.origin).href)
  }, [pathname])

  return (
    <div className='w-full lg:grid lg:grid-cols-3 flex flex-col gap-8'>
      <div className='flex flex-col gap-4 col-span-1'>
        <figure>
          <img
            src={ship.image ? ship.image : '/No-image.png'}
            alt={ship.name}
            width={640}
            height={480}
            className='w-full object-cover'
          />
        </figure>
        <div className='flex flex-col gap-4 mb-4'>
          <h1 className='text-3xl font-semibold'>{ship.name}</h1>
          <p>
            <strong>Type:</strong> {ship.type}
          </p>
          <p>
            <strong>Roles:</strong> {ship.roles.join(', ')}
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <a
            href={ship.link}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary'
          >
            Learn More!
          </a>
          <SocialShare postUrl={currentUrl} />
        </div>
      </div>

      <div className='md:grid md:grid-cols-3 flex flex-col gap-4 col-span-2'>
        <div className='p-4 max-h-64 flex flex-col gap-3 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
          <h3 className='text-lg font-semibold -mx-4 bg-base-200 -mt-4 p-2'>
            General
          </h3>
          <p>
            <strong>IMO:</strong> {ship.imo}
          </p>
          <p>
            <strong>MMSI:</strong> {ship.mmsi}
          </p>
          <p>
            <strong>ABS:</strong> {ship.abs}
          </p>
          <p>
            <strong>Class:</strong> {ship.class}
          </p>
          <p>
            <strong>Mass:</strong> {ship.mass_kg} kg ({ship.mass_lbs} lbs)
          </p>
        </div>

        <div className='p-4 max-h-64 flex flex-col gap-3 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
          <h3 className='text-lg font-semibold -mx-4 bg-base-200 -mt-4 p-2'>
            Details
          </h3>
          <p>
            <strong>Year Built:</strong> {ship.year_built}
          </p>
          <p>
            <strong>Home Port:</strong> {ship.home_port}
          </p>
          <p>
            <strong>Status:</strong> {ship.status || 'N/A'}
          </p>
          <p>
            <strong>Active:</strong> {ship.active ? 'Yes' : 'No'}
          </p>
        </div>

        <div className='p-4 max-h-64 flex flex-col gap-3 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
          <h3 className='text-lg font-semibold -mx-4 bg-base-200 -mt-4 p-2'>
            Location
          </h3>
          <p>
            <strong>Latitude:</strong> {ship.latitude || 'N/A'}
          </p>
          <p>
            <strong>Longitude:</strong> {ship.longitude || 'N/A'}
          </p>
          <p>
            <strong>Last AIS Update:</strong> {ship.last_ais_update || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ship
