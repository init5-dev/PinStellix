'use client'

import { usePathname } from "next/navigation"

const Breadcrumb = () => {
  const pathname = usePathname()
  const pathTokens = pathname.split('/').slice(1)
  pathTokens.unshift('Inicio')

  const ptCount = pathTokens.length

  const capitalize = (text: string) => {
    return text[0].toUpperCase() + text.slice(1)
  }

  return pathname !== '/' && (
    <div className="flex items-center justify-center my-8">
      <div className='breadcrumbs text-sm'>
      <ul>
        {pathTokens.map((token, i) =>
          i < ptCount - 1 ? (
            <li key={i}>
              <a href={i == 0? '/' : '/' + pathTokens.slice(1, i+1).join('/')}>{capitalize(token)}</a>
            </li>
          ) : (
            <li key={i}><span className="font-semibold">{capitalize(token)}</span></li>
          )
        )}
      </ul>
    </div>
    </div>
  )
}

export default Breadcrumb
