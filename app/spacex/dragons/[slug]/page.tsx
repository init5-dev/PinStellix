'use client'

import React, { useEffect, useState } from 'react'
import { IDragon } from '@/app/lib/components/pins/types'
import Loading from '@/app/lib/components/Loading'
import Error from '@/app/lib/components/Error'
import Dragon from "@/app/lib/components/pins/Dragon"

type DragonPageProps = {
  params: {
    slug: string
  }
}

const DragonPage = ({ params }: DragonPageProps) => {
  const [dragon, setDragon] = useState<IDragon | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    console.log('PARAMS:', params)
    const fetchDragon = async () => {
      if (params.slug) {
        try {
          let res = await fetch(
            `https://api.spacexdata.com/v4/dragons`
          )
          
          if (!res.ok) {
            setError('Dragons not found')
            setLoading(false)
            return
          }

          const dragons = (await res.json()) as IDragon[]
          const id = dragons.filter(dragon => dragon.name === params.slug.replaceAll('-', ' '))[0].id

          res = await fetch(
            `https://api.spacexdata.com/v4/dragons/${id}`
          )

          if (!res.ok) {
            setError('Dragon not found')
            setLoading(false)
            return
          }
          const data = await res.json()
          setDragon(data)
        } catch (err) {
          const error = err as Error
          setError(error.message)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchDragon()
  }, [params])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message={error} />
  }

  if (!dragon) {
    return <Error message='Dragon not found' />
  }

  return <Dragon dragon={dragon} />
}

export default DragonPage
