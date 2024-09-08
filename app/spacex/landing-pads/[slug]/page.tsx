'use client'

import React, { useEffect, useState } from 'react'
import { ILandingPad } from "@/app/lib/components/pins/types"
import Loading from '@/app/lib/components/Loading'
import Error from '@/app/lib/components/Error'
import LandingPad from "@/app/lib/components/pins/LandingPad"

type LandingPadPageProps = {
  params: {
    slug: string
  }
}

const LandingPadPage = ({ params }: LandingPadPageProps) => {
  const [lpad, setLPad] = useState<ILandingPad | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchLandingPad = async () => {
      if (params.slug) {
        try {
          const res = await fetch(
            `https://api.spacexdata.com/v4/landpads/${params.slug}`
          )
          if (!res.ok) {
            setError('Landing pad not found')
            setLoading(false)
            return
          }
          const data = await res.json()
          setLPad(data)
        } catch (err) {
          const error = err as Error
          setError(error.message)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchLandingPad()
  }, [params])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message={error} />
  }

  if (!lpad) {
    return <Error message='Core not found' />
  }

  return <LandingPad landingPad={lpad} />
}

export default LandingPadPage
