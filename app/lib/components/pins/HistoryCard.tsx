'use client'
import React, { useEffect, useState } from 'react'
import SocialShare from '../SocialShare'
import { usePathname } from 'next/navigation'
import { format } from 'date-fns'
import { IHistory } from "./types"

const HistoryCard = ({ history }: { history: IHistory }) => {
  const pathname = usePathname()
  const [currentUrl, setCurrentURL] = useState('')

  useEffect(() => {
    setCurrentURL(new URL(pathname, window.location.origin).href)
  }, [pathname])

  return (
    <div className='flex flex-col gap-4 p-4 rounded-sm bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm shadow-gray-900'>
      <h2 className='text-2xl font-semibold line-clamp-1'>{history.title}</h2>
      <p>
        <b>Date: </b>
        {history.event_date_utc
          ? format(new Date(history.event_date_utc), 'MMMM dd, yyyy')
          : 'N\\A'}
      </p>
      <p className='line-clamp-2'>
        <b>Details: </b>
        {history.details || 'No details available'}
      </p>
      
      <div className='flex items-center justify-between gap-4 mt-4'>
      {history.links.article && (
        <div className='flex items-center justify-between gap-4'>
          <a href={`/spacex/history/${history.id}`} className='btn btn-primary'>
            Take a look!
          </a>
        </div>
      )}
        <SocialShare postUrl={currentUrl} />
      </div>
    </div>
  )
}

export default HistoryCard
