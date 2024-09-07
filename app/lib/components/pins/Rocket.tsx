'use client'
import React, { useEffect, useState } from 'react'
import { IRocket } from './types'
import SocialShare from "../SocialShare"
import { usePathname } from "next/navigation"

const Rocket = ({ rocket }: IRocket) => {
  const pathname = usePathname()
  const [currentUrl, setCurrentURL] = useState('')

  useEffect(() => {
    setCurrentURL(new URL(pathname, window.location.origin).href)
  }, [pathname])

  return (
    <div className='w-full flex flex-col lg:flex-row gap-8'>
      <div className='flex flex-col gap-4'>
        <figure>
          <img
            src={rocket.flickr_images[0]}
            alt={rocket.rocket_name}
            width={640}
            height={480}
            className='w-full h-60 object-cover'
          />
        </figure>
        <div className="flex flex-col gap-4 mb-4">
          <h1 className='text-3xl font-semibold'>{rocket.rocket_name}</h1>
          <p>{rocket.description}</p>
        </div>
        <div className='flex items-center justify-between'>
          <a
            href={rocket.wikipedia}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary'
          >
            Learn More!
          </a>
          <SocialShare postUrl={currentUrl} />
        </div>
      </div>
      <div className='lg:grid lg:grid-cols-4 flex flex-col gap-4'>
        <div className='p-4 flex flex-col gap-3 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
          <h3 className='text-lg font-semibold bg-base-200 -mx-4 -mt-4 p-2 bg-base-200 -mx-4 -mt-4 p-2'>General</h3>
          <p>
            <strong>Company:</strong> {rocket.company}
          </p>
          <p>
            <strong>Country:</strong> {rocket.country}
          </p>
          <p>
            <strong>First Flight:</strong> {rocket.first_flight}
          </p>
          <p>
            <strong>Cost per Launch:</strong> $
            {rocket.cost_per_launch.toLocaleString()}
          </p>
          <p>
            <strong>Success Rate:</strong> {rocket.success_rate_pct}%
          </p>
          <p>
            <strong>Active:</strong> {rocket.active ? 'Yes' : 'No'}
          </p>
        </div>
        <div className='p-4 flex flex-col gap-3 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
          <h3 className='text-lg font-semibold bg-base-200 -mx-4 -mt-4 p-2'>Specifications</h3>
          <p>
            <strong>Height:</strong> {rocket.height.meters} m (
            {rocket.height.feet} ft)
          </p>
          <p>
            <strong>Diameter:</strong> {rocket.diameter.meters} m (
            {rocket.diameter.feet} ft)
          </p>
          <p>
            <strong>Mass:</strong> {rocket.mass.kg} kg ({rocket.mass.lb} lb)
          </p>
        </div>
        <div className='p-4 flex flex-col gap-3 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
          <h3 className='text-lg font-semibold bg-base-200 -mx-4 -mt-4 p-2'>Payload Weights</h3>
          {rocket.payload_weights.map(payload => (
            <p key={payload.id}>
              <strong>{payload.name}:</strong> {payload.kg} kg ({payload.lb} lb)
            </p>
          ))}
        </div>
        <div className='p-4 flex flex-col gap-3 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
          <h3 className='text-lg font-semibold bg-base-200 -mx-4 -mt-4 p-2'>First Stage</h3>
          <p>
            <strong>Engines:</strong> {rocket.first_stage.engines}
          </p>
          <p>
            <strong>Fuel Amount:</strong> {rocket.first_stage.fuel_amount_tons}{' '}
            tons
          </p>
          <p>
            <strong>Thrust at Sea Level:</strong>{' '}
            {rocket.first_stage.thrust_sea_level.kN} kN
          </p>
        </div>
        <div className='p-4 flex flex-col gap-3 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
          <h3 className='text-lg font-semibold bg-base-200 -mx-4 -mt-4 p-2'>Second Stage</h3>
          <p>
            <strong>Engines:</strong> {rocket.second_stage.engines}
          </p>
          <p>
            <strong>Fuel Amount:</strong> {rocket.second_stage.fuel_amount_tons}{' '}
            tons
          </p>
          <p>
            <strong>Thrust:</strong> {rocket.second_stage.thrust.kN} kN
          </p>
        </div>
        <div className='p-4 flex flex-col gap-3 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
          <h3 className='text-lg font-semibold bg-base-200 -mx-4 -mt-4 p-2'>Engines</h3>
          <p>
            <strong>Type:</strong> {rocket.engines.type} (
            {rocket.engines.version})
          </p>
          <p>
            <strong>Thrust at Sea Level:</strong>{' '}
            {rocket.engines.thrust_sea_level.kN} kN
          </p>
        </div>
      </div>
    </div>
  )
}

export default Rocket
