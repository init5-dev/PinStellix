'use client'

import React, { useEffect, useState } from 'react'
import { IShip } from './types'
import SocialShare from '../SocialShare'
import { usePathname } from 'next/navigation'

const ShipCard = ({ ship }: { ship: IShip }) => {
  const pathname = usePathname()
  const [currentUrl, setCurrentURL] = useState('')

  useEffect(() => {
    setCurrentURL(new URL(pathname, window.location.origin).href)
  }, [pathname])

  return (
    <div className='flex flex-col gap-4 p-4 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
      <figure>
        <img
          src={ship.image ? ship.image : '/No-image.png'}
          alt={ship.name}
          width={640}
          height={480}
          className='w-full h-60 object-cover'
        />
      </figure>
      <div className='flex flex-col gap-4 mb-4'>
        <h2 className='text-3xl font-semibold'>{ship.name}</h2>
        <p className='h-20 break-words line-clamp-5'>
          <strong>Type:</strong> {ship.type} <br />
          <strong>Roles:</strong> {ship.roles.join(', ')}
        </p>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <a
          href={`/spacex/ships/${ship.name.replaceAll(' ', '-')}`}
          className='btn btn-primary'
        >
          Take a look!
        </a>
        <SocialShare postUrl={currentUrl} />
      </div>
    </div>
  )
}

export default ShipCard
