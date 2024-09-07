import { ISidebarCategory } from "./types"

const SidebarButton = ({ name, href }: ISidebarCategory) => {
  return (
    <a className='btn bt-lg h-24 w-36 bg-opacity-50 hover:bg-opacity-15 backdrop-blur-[2px] shadow-sm' href={href}>
      <div className=' flex flex-col items-center justify-center gap-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='h-6 w-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 3v2m6.364-1.364L16.95 7.05M21 12h-2M6.364 3.636L7.05 7.05M4 12H2M12 17v2M3.636 6.364L7.05 7.05M12 12m-6 0a6 6 0 1112 0 6 6 0 01-12 0z'
          />
        </svg>
        <span className='text-xs'>{name}</span>
      </div>
    </a>
  )
}

export default SidebarButton
