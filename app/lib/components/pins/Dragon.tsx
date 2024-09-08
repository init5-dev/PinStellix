'use client'

import React, { useEffect, useState } from 'react'
import { IDragon } from './types'
import SocialShare from "@/app/lib/components/SocialShare"
import { usePathname } from 'next/navigation'

const Dragon = ({ dragon }: { dragon: IDragon }) => {
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
            src={dragon.flickr_images[0]}
            alt={dragon.name}
            width={640}
            height={480}
            className='w-full object-cover'
          />
        </figure>
        <div className='flex flex-col gap-4 mb-4'>
          <h1 className='text-3xl font-semibold'>{dragon.name}</h1>
          <p>{dragon.description}</p>
        </div>
        <div className='flex items-center justify-between'>
          <a
            href={dragon.wikipedia}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary'
          >
            Learn More!
          </a>
          <SocialShare postUrl={currentUrl} />
        </div>
      </div>
      <div className='md:grid md:grid-cols-4 flex flex-col gap-4 col-span-2'>
        <div className='p-4 flex flex-col gap-3 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
          <h3 className='text-lg font-semibold -mx-4 bg-base-200 -mt-4 p-2'>
            General
          </h3>
          <p>
            <strong>Type:</strong> {dragon.type}
          </p>
          <p>
            <strong>First Flight:</strong> {dragon.first_flight}
          </p>
          <p>
            <strong>Active:</strong> {dragon.active ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>Orbit Duration:</strong> {dragon.orbit_duration_yr} years
          </p>
          <p>
            <strong>Crew Capacity:</strong> {dragon.crew_capacity}
          </p>
          <p>
            <strong>Dry Mass:</strong> {dragon.dry_mass_kg} kg (
            {dragon.dry_mass_lb} lb)
          </p>
        </div>
        <div className='p-4 flex flex-col gap-3 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
          <h3 className='text-lg font-semibold bg-base-200 -mx-4 -mt-4 p-2'>
            Dimensions
          </h3>
          <p>
            <strong>Height with Trunk:</strong> {dragon.height_w_trunk.meters} m (
            {dragon.height_w_trunk.feet} ft)
          </p>
          <p>
            <strong>Diameter:</strong> {dragon.diameter.meters} m (
            {dragon.diameter.feet} ft)
          </p>
        </div>
        <div className='p-4 flex flex-col gap-3 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
          <h3 className='text-lg font-semibold bg-base-200 -mx-4 -mt-4 p-2'>
            Payload Capacities
          </h3>
          <p>
            <strong>Launch Payload Mass:</strong> {dragon.launch_payload_mass.kg} kg (
            {dragon.launch_payload_mass.lb} lb)
          </p>
          <p>
            <strong>Return Payload Mass:</strong> {dragon.return_payload_mass.kg} kg (
            {dragon.return_payload_mass.lb} lb)
          </p>
          <p>
            <strong>Payload Volume (Launch):</strong> {dragon.launch_payload_vol.cubic_meters} m³ (
            {dragon.launch_payload_vol.cubic_feet} ft³)
          </p>
          <p>
            <strong>Payload Volume (Return):</strong> {dragon.return_payload_vol.cubic_meters} m³ (
            {dragon.return_payload_vol.cubic_feet} ft³)
          </p>
        </div>
        <div className='p-4 flex flex-col gap-3 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
          <h3 className='text-lg font-semibold bg-base-200 -mx-4 -mt-4 p-2'>
            Thrusters
          </h3>
          {dragon.thrusters.map((thruster, index) => (
            <div key={index}>
              <p>
                <strong>Type:</strong> {thruster.type}
              </p>
              <p>
                <strong>Amount:</strong> {thruster.amount}
              </p>
              <p>
                <strong>Thrust:</strong> {thruster.thrust.kN} kN (
                {thruster.thrust.lbf} lbf)
              </p>
            </div>
          ))}
        </div>
        <div className='p-4 flex flex-col gap-3 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
          <h3 className='text-lg font-semibold bg-base-200 -mx-4 -mt-4 p-2'>
            Heat Shield
          </h3>
          <p>
            <strong>Material:</strong> {dragon.heat_shield.material}
          </p>
          <p>
            <strong>Size:</strong> {dragon.heat_shield.size_meters} meters
          </p>
          <p>
            <strong>Temperature Resistance:</strong> {dragon.heat_shield.temp_degrees} °C
          </p>
          <p>
            <strong>Developer Partner:</strong> {dragon.heat_shield.dev_partner}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dragon
