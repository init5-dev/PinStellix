'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import SocialShare from '../SocialShare'
import { ILandingPad } from "./types"

const LandingPad = ({ landingPad }: {landingPad: ILandingPad}) => {
  const {
    name,
    full_name,
    status,
    type,
    locality,
    region,
    latitude,
    longitude,
    landing_attempts,
    landing_successes,
    wikipedia,
    details,
    launches
  } = landingPad

  const pathname = usePathname()
  const [currentUrl, setCurrentURL] = useState('')

  useEffect(() => {
    setCurrentURL(new URL(pathname, window.location.origin).href)
  }, [pathname])

  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-4 p-4 w-96 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
        <h1 className='text-3xl font-semibold mb-4'>
          {name} ({full_name})
        </h1>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4'>
            <p>
              <strong>Status:</strong> {status}
            </p>
            <p>
              <strong>Type:</strong> {type}
            </p>
            <p>
              <strong>Locality:</strong> {locality}, {region}
            </p>
            <p>
              <strong>Coordinates:</strong> {latitude}, {longitude}
            </p>
            <p>
              <strong>Landing Attempts:</strong> {landing_attempts}
            </p>
            <p>
              <strong>Landing Successes:</strong> {landing_successes}
            </p>
            <p className="text-justify">
              <strong>Details:</strong> {details}
            </p>
          </div>
          
        </div>
        <div className='flex items-center justify-between gap-4 w-full'>
        <a
          href={wikipedia}
          className='btn btn-primary'
          target="_blank"
          rel='noopener noreferrer'
        >
          Learn more!
        </a>
        <SocialShare postUrl={currentUrl} />
      </div>
      </div>
    </div>
  )
}

export default LandingPad
