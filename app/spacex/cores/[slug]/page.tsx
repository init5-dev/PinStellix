'use client'

import React, { useEffect, useState } from 'react'
import { ICore } from "@/app/lib/components/pins/types"
import Loading from '@/app/lib/components/Loading'
import Error from '@/app/lib/components/Error'
import Core from "@/app/lib/components/pins/Core"

type CorePageProps = {
  params: {
    slug: string
  }
}

const CorePage = ({ params }: CorePageProps) => {
  const [core, setCore] = useState<ICore | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchCore = async () => {
      if (params.slug) {
        try {
          let res = await fetch(
            `https://api.spacexdata.com/v4/cores`
          )
          
          if (!res.ok) {
            setError('Cores not found')
            setLoading(false)
            return
          }

          const cores = (await res.json()) as ICore[]
          const id = cores.filter(core => core.serial === params.slug.replaceAll('-', ' '))[0].id

          console.log('ID:', id)

          res = await fetch(
            `https://api.spacexdata.com/v4/cores/${id}`
          )
          if (!res.ok) {
            setError('Core not found')
            setLoading(false)
            return
          }
          const data = await res.json()
          setCore(data)
        } catch (err) {
          const error = err as Error
          setError(error.message)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchCore()
  }, [params])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message={error} />
  }

  if (!core) {
    return <Error message='Core not found' />
  }

  return <Core core={core} />
}

export default CorePage
