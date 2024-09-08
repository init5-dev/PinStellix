'use client'
import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { usePathname } from 'next/navigation'
import SocialShare from '../SocialShare'
import { IHistory } from './types'

const History: React.FC<{ history: IHistory }> = ({ history }) => {
  const { title, event_date_utc, details, links } = history

  const pathname = usePathname()
  const [currentUrl, setCurrentURL] = useState('')

  useEffect(() => {
    setCurrentURL(new URL(pathname, window.location.origin).href)
  }, [pathname])

  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-4 p-4 w-96 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
        <h1 className='text-3xl font-semibold mb-4'>{title}</h1>
        <p className='w-full'>
          <strong>Date:</strong>{' '}
          {event_date_utc
            ? format(new Date(event_date_utc), 'MMMM dd, yyyy')
            : 'Not available'}
        </p>
        <p className='mb-6'>
          <strong>Details:</strong> {details || 'No details available'}
        </p>

        <div className='flex items-center justify-between gap-4 w-full'>
          {links.article && (
            <a href={`${history.links.article}`} className='btn btn-primary'>
              Read more
            </a>
          )}
          <SocialShare postUrl={currentUrl} />
        </div>
      </div>
    </div>
  )
}

export default History
