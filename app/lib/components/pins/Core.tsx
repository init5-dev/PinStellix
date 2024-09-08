'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import SocialShare from '../SocialShare'
import { ICore } from "./types"

const Core: React.FC<{ core: ICore }> = ({ core }) => {
  const {
    block,
    reuse_count,
    rtls_attempts,
    rtls_landings,
    asds_attempts,
    asds_landings,
    last_update,
    launches,
    serial,
    status
  } = core

  const pathname = usePathname()
  const [currentUrl, setCurrentURL] = useState('')

  useEffect(() => {
    setCurrentURL(new URL(pathname, window.location.origin).href)
  }, [pathname])

  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-4 p-4 w-96 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
        <h1 className='text-3xl font-semibold mb-4'>
          {serial} (Block {block})
        </h1>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4'>
            <p>
              <strong>Status:</strong> {status}
            </p>
            <p>
              <strong>Reuse Count:</strong> {reuse_count}
            </p>
            <p>
              <strong>RTLS Attempts:</strong> {rtls_attempts}
            </p>
            <p>
              <strong>RTLS Landings:</strong> {rtls_landings}
            </p>
            <p>
              <strong>ASDS Attempts:</strong> {asds_attempts}
            </p>
            <p>
              <strong>ASDS Landings:</strong> {asds_landings}
            </p>
            <p>
              <strong>Last Update:</strong> {last_update || 'No updates available'}
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-semibold'>Launches</h2>
            {launches.length > 0 ? (
              <ul className="flex flex-col gap-4">
                {launches.map((launch, index) => (
                  <li key={index}>
                    <strong>Launch ID:</strong> {launch}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No launches recorded.</p>
            )}
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
          <SocialShare postUrl={currentUrl} />
        </div>
      </div>
    </div>
  )
}

export default Core
