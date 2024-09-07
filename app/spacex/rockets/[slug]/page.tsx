'use client'

import React, { useEffect, useState } from 'react'
import Rocket from '@/app/lib/components/pins/Rocket'
import { IRocket } from '@/app/lib/components/pins/types'
import Loading from '@/app/lib/components/Loading'
import Error from '@/app/lib/components/Error'

type RocketPageProps = {
  params: {
    slug: string
  }
}

const RocketPage = ({ params }: RocketPageProps) => {
  const [rocket, setRocket] = useState<IRocket | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    console.log('PARAMS:', params)
    const fetchRocket = async () => {
      if (params.slug) {
        try {
          const res = await fetch(
            `https://api.spacexdata.com/v3/rockets/${params.slug}`
          )
          if (!res.ok) {
            setError('Rocket not found')
            setLoading(false)
            return
          }
          const data = await res.json()
          setRocket(data)
        } catch (err) {
          const error = err as Error
          setError(error.message)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchRocket()
  }, [params])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message={error} />
  }

  if (!rocket) {
    return <Error message='Rocket not found' />
  }

  return <Rocket rocket={rocket} />
}

export default RocketPage
