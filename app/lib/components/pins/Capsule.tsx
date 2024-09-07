'use client'
import React, { useEffect, useState } from 'react'
import { ICapsule } from './types'
import { format } from 'date-fns'
import { usePathname } from 'next/navigation'
import SocialShare from '../SocialShare'

const Capsule: React.FC<{ capsule: ICapsule }> = ({ capsule }) => {
  const {
    capsule_serial,
    capsule_id,
    status,
    original_launch,
    missions,
    landings,
    type,
    details,
    reuse_count
  } = capsule

  const pathname = usePathname()
  const [currentUrl, setCurrentURL] = useState('')

  useEffect(() => {
    setCurrentURL(new URL(pathname, window.location.origin).href)
  }, [pathname])

  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-4 p-4 w-96 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
        <h1 className='text-3xl font-semibold mb-4'>
          {capsule_serial} ({capsule_id})
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
              <strong>Details:</strong> {details || 'No details available'}
            </p>
            <p>
              <strong>Reuse Count:</strong> {reuse_count}
            </p>
            <p>
              <strong>Landings:</strong> {landings}
            </p>
            <p>
              <strong>Original Launch:</strong>{' '}
              {original_launch
                ? format(new Date(original_launch), 'MMMM dd, yyyy')
                : 'Not available'}
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-semibold'>Missions</h2>
            {missions.length > 0 ? (
              <ul className="flex flex-col gap-4">
                {missions.map((mission, index) => (
                  <li key={index}>
                    <strong>{mission.name}</strong> (Flight {mission.flight})
                  </li>
                ))}
              </ul>
            ) : (
              <p>No missions recorded.</p>
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

export default Capsule
