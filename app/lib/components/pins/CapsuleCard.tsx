'use client'

import React, { useEffect, useState } from 'react'
import SocialShare from '../SocialShare'
import { usePathname } from 'next/navigation'
import { ICapsule } from './types'
import { format } from 'date-fns'

const CapsuleCard = ({ capsule }: { capsule: ICapsule }) => {
  const pathname = usePathname()
  const [currentUrl, setCurrentURL] = useState('')

  useEffect(() => {
    setCurrentURL(new URL(pathname, window.location.origin).href)
  }, [pathname])

  return (
    <div className='flex flex-col gap-4 p-4 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
      <div className='flex flex-col gap-4 mb-4'>
        <h2 className='text-3xl font-semibold'>{capsule.capsule_serial}</h2>
        <p>
          <b>ID: </b>
          {capsule.capsule_id}
        </p>
        <p className='break-words line-clamp-1 h-5'>
          <b>Details: </b>
          {capsule.details ? capsule.details : 'N\\A'}
        </p>
        <p>
          <b>Original launch: </b>
          {capsule.original_launch
            ? format(capsule.original_launch, 'MMMM dd, yyyy')
            : 'N\\A'}
        </p>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <a
          href={`/spacex/capsules/${capsule.capsule_serial}`}
          className='btn btn-primary'
        >
          Take a look!
        </a>
        <SocialShare postUrl={currentUrl} />
      </div>
    </div>
  )
}

export default CapsuleCard
