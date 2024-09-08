'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import SocialShare from '../SocialShare'
import { ICore } from "./types"

const CoreCard = ({ core }: { core: ICore }) => {
  const pathname = usePathname()
  const [currentUrl, setCurrentURL] = useState('')

  useEffect(() => {
    setCurrentURL(new URL(pathname, window.location.origin).href)
  }, [pathname])

  return (
    <div className='flex flex-col gap-4 p-4 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
      <div className='flex flex-col gap-4 mb-4'>
        <h2 className='text-3xl font-semibold'>{core.serial}</h2>
        <p>
          <b>Block: </b>
          {core.block}
        </p>
        <p className='break-words line-clamp-1'>
          <b>Last Update: </b>
          {core.last_update ? core.last_update : 'N\\A'}
        </p>
        <p>
          <b>Status: </b>
          {core.status}
        </p>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <a
          href={`/spacex/cores/${core.serial}`}
          className='btn btn-primary'
        >
          Take a look!
        </a>
        <SocialShare postUrl={currentUrl} />
      </div>
    </div>
  )
}

export default CoreCard
