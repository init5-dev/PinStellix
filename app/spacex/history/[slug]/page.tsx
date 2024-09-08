'use client'

import React, { useEffect, useState } from 'react'
import { IHistory } from "@/app/lib/components/pins/types"
import Loading from '@/app/lib/components/Loading'
import Error from '@/app/lib/components/Error'
import History from "@/app/lib/components/pins/History"

type HistoryPageProps = {
  params: {
    slug: string
  }
}

const HistoryPage = ({ params }: HistoryPageProps) => {
  const [history, setHistory] = useState<IHistory | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchHistory = async () => {
      if (params.slug) {
        try {
          const res = await fetch(
            `https://api.spacexdata.com/v4/history/${params.slug}`
          )
          if (!res.ok) {
            setError('History not found')
            setLoading(false)
            return
          }
          const data = await res.json()
          setHistory(data)
        } catch (err) {
          const error = err as Error
          setError(error.message)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchHistory()
  }, [params])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message={error} />
  }

  if (!history) {
    return <Error message='History not found' />
  }

  return <History history={history} />
}

export default HistoryPage
