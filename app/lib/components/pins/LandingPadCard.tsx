'use client'

import React, { useEffect, useState } from 'react'
import SocialShare from '../SocialShare'
import { usePathname } from 'next/navigation'
import { ILandingPad } from "./types"


const LandingPadCard: React.FC<{ landingPad: ILandingPad }> = ({ landingPad }) => {
  const pathname = usePathname()
  const [currentUrl, setCurrentURL] = useState('')

  useEffect(() => {
    setCurrentURL(new URL(pathname, window.location.origin).href)
  }, [pathname])

  return (
    <div className='flex flex-col gap-4 p-4 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
      <div className='flex flex-col gap-4 mb-4'>
        <h2 className='text-3xl font-semibold'>{landingPad.name}</h2>
        <p>
          <b>Full Name: </b>
          {landingPad.full_name}
        </p>
        <p>
          <b>Status: </b>
          {landingPad.status}
        </p>
        <p className='break-words line-clamp-1'>
          <b>Details: </b>
          {landingPad.details ? landingPad.details : 'N\\A'}
        </p>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <a
          href={`/spacex/landing-pads/${landingPad.id}`}
          className='btn btn-primary'
        >
          Take a look!
        </a>
        <SocialShare postUrl={currentUrl} />
      </div>
    </div>
  )
}

export default LandingPadCard
