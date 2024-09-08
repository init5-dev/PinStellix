'use client'

import React, { useEffect, useState } from 'react'
import { IShip } from '@/app/lib/components/pins/types'
import Loading from '@/app/lib/components/Loading'
import Error from '@/app/lib/components/Error'
import Ship from "@/app/lib/components/pins/Ship"

type ShipPageProps = {
  params: {
    slug: string
  }
}

const ShipPage = ({ params }: ShipPageProps) => {
  const [ship, setShip] = useState<IShip | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchShip = async () => {
      if (params.slug) {
        try {
          let res = await fetch(
            `https://api.spacexdata.com/v4/ships`
          )
          
          if (!res.ok) {
            setError('Ships not found')
            setLoading(false)
            return
          }

          const ships = (await res.json()) as IShip[]
          const id = ships.filter(dragon => dragon.name === params.slug.replaceAll('-', ' '))[0].id

          res = await fetch(
            `https://api.spacexdata.com/v4/ships/${id}`
          )

          if (!res.ok) {
            setError('Ship not found')
            setLoading(false)
            return
          }
          const data = await res.json()
          setShip(data)
        } catch (err) {
          const error = err as Error
          setError(error.message)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchShip()
  }, [params])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message={error} />
  }

  if (!ship) {
    return <Error message='Ship not found' />
  }

  return <Ship ship={ship} />
}

export default ShipPage
