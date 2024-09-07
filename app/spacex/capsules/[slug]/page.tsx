'use client'

import React, { useEffect, useState } from 'react'
import Rocket from '@/app/lib/components/pins/Rocket'
import { ICapsule, IRocket } from '@/app/lib/components/pins/types'
import Loading from '@/app/lib/components/Loading'
import Error from '@/app/lib/components/Error'
import Capsule from "@/app/lib/components/pins/Capsule"

type CapsulePageProps = {
  params: {
    slug: string
  }
}

const RocketPage = ({ params }: CapsulePageProps) => {
  const [capsule, setCapsule] = useState<ICapsule | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('PARAMS:', params)
    const fetchCapsule = async () => {
      if (params.slug) {
        try {
          const res = await fetch(
            `https://api.spacexdata.com/v3/capsules/${params.slug}`
          )
          if (!res.ok) {
            throw new Error('Capsule not found') 
          }
          const data = await res.json()
          setCapsule(data)
        } catch (err: any) {
          setError(err.message)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchCapsule()
  }, [params])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message={error} />
  }

  if (!capsule) {
    return <Error message='Capsule not found' />
  }

  return <Capsule capsule={capsule} />
}

export default RocketPage
